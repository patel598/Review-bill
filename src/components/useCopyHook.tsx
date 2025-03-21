import { useState, useCallback } from 'react';
import { Bounce, toast } from 'react-toastify';

export const useCopyToClipboard = () => {
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const copyToClipboard = useCallback(async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success('✔️ Copied', {
                position: "top-right",
                autoClose: 1000,
                pauseOnHover: true,
                theme: "light",
                transition: Bounce,
            })
        } catch (error) {
            console.error('Failed to copy: ', error);
            setIsCopied(false);
        }
    }, []);

    return { isCopied, copyToClipboard };
};

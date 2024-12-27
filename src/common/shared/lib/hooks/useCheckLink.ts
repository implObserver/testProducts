import { useState, useEffect } from 'react';

export const useCheckLink = (url: string) => {
    const [isLinkValid, setIsLinkValid] = useState<boolean | null>(null);

    useEffect(() => {
        const checkLink = async () => {
            try {
                const response = await fetch(url, { method: 'HEAD' });
                setIsLinkValid(response.ok);
            } catch (error) {
                setIsLinkValid(false);
            }
        };

        checkLink();
    }, [url]);

    return isLinkValid;
};
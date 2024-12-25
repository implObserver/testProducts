import { useEffect } from "react";
import styles from './styles/ViewError.module.css'
import { useAppDispatch } from "@/common/shared/lib";
import { statusesActions } from "../../../model/slice/statuses/slice";
import { isDenied, isError } from "../../../lib/helper/getStatuses";
import { Denied } from "@/services/notifications/entities/denied";
import { Error } from "@/services/notifications/entities/error";

export const ViewError = ({ error }: { error: ErrorType }) => {
    const dispatch = useAppDispatch();
    const status = error.status;
    const message = error.message;

    useEffect(() => {
        const handleUnload = () => {
            dispatch(statusesActions.removeError(error));
        };
        window.addEventListener('beforeunload', handleUnload);
        setTimeout(() => {
            dispatch(statusesActions.removeError(error));
        }, 5000);
        return () => {
            window.removeEventListener('beforeunload', handleUnload);
        };
    }, [])

    if (!error) {
        return null;
    }

    return (
        <div className={styles.container}>
            {isError(status)
                ? <Error message={message} />
                : isDenied(status)
                    ? <Denied message={message} />
                    : null
            }
        </div>
    )
}
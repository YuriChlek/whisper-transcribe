let start_stop_flag: boolean = false;

export const set_stop_flag: () => boolean = () => {
    start_stop_flag = false;
    return start_stop_flag;
};

export const set_start_flag: () => boolean = () => {
    start_stop_flag = true;
    return start_stop_flag;
};

export const get_start_stop_flag: () => boolean = (): boolean => start_stop_flag;

export default interface Redirect {
    from: string | '';
    to: string;
    status?: 200 | 301 | 302;
}
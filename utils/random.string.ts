const randomString:any = (length:number) => length-- && "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.random()*62|0) + (randomString(length)||"");
export default randomString;
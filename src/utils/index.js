const redirectTo = (id, method, path) => () => method(`${path}/${id}`);
const url = "https://photostock-back.herokuapp.com/storage/";

export { redirectTo, url };

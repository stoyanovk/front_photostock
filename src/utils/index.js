const redirectTo = (id, method, path) => () => method(`${path}/${id}`);
const showPrivatComponent = (auth, component) => (auth ? component : null);
const url = "https://photostock-back.herokuapp.com/storage/";
export { redirectTo, showPrivatComponent, url };

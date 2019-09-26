const redirectTo = (id, method, path) => () => method(`${path}/${id}`);
const showPrivatComponent = (auth, component) => (auth ? component : null);
export { redirectTo, showPrivatComponent };

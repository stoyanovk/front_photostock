const redirectTo = (id, method, path) =>() => {
  method(`${path}/${id}`);
};

export { redirectTo };

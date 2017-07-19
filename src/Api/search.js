export default (data, request) =>
  request === undefined || request === ""
    ? []
    : data
        .filter(
          el =>
            el.name
              .toLowerCase()
              .replace(/\s+/g, " ")
              .indexOf(request.toLowerCase()) !== -1
        )
        .map(el => el.id);

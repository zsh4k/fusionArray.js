      const fusionArray = (keys, values) => Object.assign({}, ...keys.map((key, i) => (values[i] ? { [key]: values[i] } : {})));

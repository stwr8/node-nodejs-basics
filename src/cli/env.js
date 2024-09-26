const parseEnv = () => {
  const rssVars = Object.entries(process.env).filter(([key]) =>
    key.startsWith("RSS_")
  );

  console.log(rssVars.map(([key, value]) => `${key}=${value}`).join("; "));
};

parseEnv();

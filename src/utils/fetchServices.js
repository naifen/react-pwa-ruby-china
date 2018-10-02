const fetchFrom = async url => {
  const response = await fetch(url);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const json = await response.json();

  return json;
};

export default fetchFrom;

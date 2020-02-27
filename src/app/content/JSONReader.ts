const waitForDocumentLoad = () => {
  return new Promise(resolve => document.addEventListener('readystatechange', () => {
    document.readyState === 'complete' && resolve();
  }));
};

export const getJSON = () => {
  return new Promise(async (resolve, reject) => {
    const readyState = document.readyState;
    if (readyState !== 'complete') {
      await waitForDocumentLoad();
    }

    try {
      resolve(JSON.parse(document.body.textContent));
    } catch (e) {
      return null;
    }
  });
};

function decodeuristring(uriString) {
    try {
      const decodedURI = decodeURI(uriString);
      console.log('Decoded URI:', decodedURI);
    } catch (error) {
      if (error instanceof URIError) {
        console.log('URIError:', error.message);
      }
    }
  }
  decodeuristring('https://linkedin.com&%');
  decodeuristring('https://linkedin.com');
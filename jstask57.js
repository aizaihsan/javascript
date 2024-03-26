function access_Variable() {
    try {
      console.log(a);
    } catch (error) {
      if (error instanceof ReferenceError) {
        console.log('ReferenceError:', error.message);
      } else {
        console.log('Error:', error.message);
      }
    }
  }
  
  access_Variable();
   
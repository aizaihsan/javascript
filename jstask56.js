function accessvariable() {
    try {
      console.log(undefinedVariable);
    } catch (error) {
      if (error instanceof ReferenceError) {
        console.log('ReferenceError:', error.message);
      } else {
        console.log('Error:', error.message);
      }
    }
  }
  
  accessvariable();
  
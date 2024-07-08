function Form() {
    return (
      <div>
        <h1>Form section</h1>
        <p>Form section of the document.</p>
        <form action="#" method="post">
             <div>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>
            </div>
            <div>
               <label for="email">Email:</label>
               <input type="email" id="email" name="email" required/>
            </div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>

        </div>
    );
  }
  
   export default Form;
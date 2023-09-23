import React, {useState} from "react";

export default function Form(){
    const [formData, setFormData] = useState({
        name: "",
        telephone: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    };

  return(
      <>
          <form>
              <label>
                  your name :
                  <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}/>
              </label>
              <label>
                  your phone number :
                  <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      pattern="[0-9]*"
                  />
              </label>
              <label>
                  your email :
                  <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}/>
              </label>
          </form>

          <div className="preview">
              <h3>Preview:</h3>
              <p>Full Name: {formData.name}</p>
              <p>Phone Number: {formData.telephone}</p>
              <p>Email Address: {formData.email}</p>
          </div>

      </>
  )
}

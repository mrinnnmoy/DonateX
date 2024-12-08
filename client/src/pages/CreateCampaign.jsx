import React, { useState } from 'react';

const CreateCampaign = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    type: "",
    image: null,
    goal: "",
    endDate: "",
    story: "",
  });

  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files.length > 0) {
      setFormData({ ...formData, image: files[0] });
      setPreviewImage(URL.createObjectURL(files[0]));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Campaign Submitted!");
  };

  return (
    <div className="campaign-container">
      <header className="header">
        <h1>Start a Campaign.</h1>
        <button>My Campaigns</button>
      </header>
      <div className="campaign-content">
        {/* Image Preview Section */}
        <div className="image-preview">
          {previewImage ? (
            <img src={previewImage} alt="Campaign Preview" />
          ) : (
            <div className="placeholder">Image Preview</div>
          )}
        </div>

        {/* Form Section */}
        <form className="campaign-form" onSubmit={handleSubmit}>
          <div className="type-1">
            <div className="form-group">
              <label>Your Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Campaign Type*</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="">Select Type</option>
                <option value="education">Education</option>
                <option value="social">Social</option>
                <option value="medicine">Medicine</option>
              </select>
            </div>
          </div>

          <div className="type-1">
            <div className="form-group">
              <label>Campaign Title*</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Campaign Goal*</label>
              <input
                type="number"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Campaign End Date*</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Select Campaign Image*</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Campaign Story*</label>
            <textarea
              name="story"
              value={formData.story}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit New Campaign
          </button>
        </form>
      </div>
    </div>
  )
};

export default CreateCampaign;
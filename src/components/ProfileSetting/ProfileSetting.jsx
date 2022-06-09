import React from 'react'

const ProfileSetting = () => {
  return (
    <div className="work-platform__my-forme my-forme">
      <div className="my-forme__photo profile-photo">

        <img src="@img/harli.jpg" alt="image description" />

      </div>
      <form action="" className="my-forme__form form-about">

        <div className="form-about__item">
          <span>Your country:</span>
          <input type="text" className="form-about__country"></input>
        </div>
        <div className="form-about__item">
          <span>Your city:</span>
          <input type="text" className="form-about__city"></input>
        </div>
        <div className="form-about__item">
          <span>Your education level:</span>
          <input type="text" className="form-about__education"></input>
        </div>
        <div className="form-about__item">
          <span>Your gender:</span>
          <input type="text" className="form-about__gender"></input>
        </div>
        <div className="form-about__item">
          <span>Write what is your :</span>
          <input type="text" className="form-about__your"></input>
        </div>

        <div className="form-about__buttons">
          <div className="form-about__save">SAVE</div>
          <div className="form-about__clear">Cansel</div>
        </div>

      </form>


    </div>
  )
}

export default ProfileSetting
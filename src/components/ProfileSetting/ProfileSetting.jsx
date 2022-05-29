import React from "react";

const ProfileSetting = () => {
    return(
        <div class="work-platform__my-forme my-forme">
    <div class="my-forme__photo profile-photo">

        <img src="@img/harli.jpg" alt="image description"/>

    </div>
    <form action="" class="my-forme__form form-about">
<div class="form-about__item">
    <span>Your name:</span>
    <input type="text" class="form-about__name"></input>
</div>        
<div class="form-about__item">
    <span>Your age:</span>
    <input type="number" class="form-about__age"></input>
</div>
<div class="form-about__item">
    <span>Your country:</span>
    <input type="text" class="form-about__country"></input>
</div>
<div class="form-about__item">
    <span>Your city:</span>
    <input type="text" class="form-about__city"></input>
</div>
<div class="form-about__item">
    <span>Your education level:</span>
    <input type="text" class="form-about__education"></input>
</div>
<div class="form-about__item">
    <span>Your gender:</span>
    <input type="text" class="form-about__gender"></input>
</div>
<div class="form-about__item">
    <span>Write what is your :</span>
    <input type="text" class="form-about__your"></input>
</div>

        <div class="form-about__buttons">
            <div class="form-about__save">SAVE</div>
            <div class="form-about__clear">Cansel</div>
        </div>

    </form>


</div>
    )
}

export default ProfileSetting
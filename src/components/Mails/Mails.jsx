import React from "react";

const Mails = () => {
  return (
    <div class="worcplatform__mails mails">

      <nav class="mails__nav">
        <ul class="mails__list">
          <li class="mails__item">
            <a href="" class="mails__link">Mail Box</a>
          </li>
          <li class="mails__item _active">

            <a href="" class="mails__link">Inbox</a>
          </li>
          <li class="mails__item">

            <a href="" class="mails__link">Outbox</a>
          </li>
          <li class="mails__item">
            <a href="" class="mails__link">Drafts</a>

          </li>
        </ul>
      </nav>


     <div class="mails__body mails-body">

         <div class="mails-body__header mails-body-header">
           <ul class="mails-body-header__list">
            <div class="mails-body-header__item">
              <input type="checkbox" class="mails-body-header__check"/>
              <span>All</span>
            </div>
            <div class="mails-body-header__item">
              <div class="mails-body-header__item">Unread</div>
            </div>
            <div class="mails-body-header__item">
              <div class="mails-body-header__item">Unanswered</div>
            </div>
          </ul>
          <button class="mails-body-header__btn _icon-delete">Delet selected</button> 
        </div>


         <div class="mails-body__mails">
          <div class="mails-body__ietm mails-item">
            <input type="checkbox" class="mails-item__check-btn "></input>
            <div class="mails-item_photo">
              <img src="@img/harli.jpg" alt="image description"/>
            </div>
            <div class="mails-item__name">Name Lastname</div>
            <div class="mails-item__text">Beginning of smsBeginning of smsBeginning of smsBeginning of smsBeginning of smsBeginning of smsBeginning of smsBeginning of smsBeginning of sms Beginning of smsBeginning of sms</div>
          </div>
          <div class="mails-body__ietm mails-item">
            <input type="checkbox" class="mails-item__check-btn "></input>
            <div class="mails-item_photo">
              <img src="@img/avatar.jpg" alt="image description image description"/>
            </div>
            <div class="mails-item__name">Name Lastname</div>
            <div class="mails-item__text">Beginning of sms</div>
          </div>
          <div class="mails-body__ietm mails-item">
            <input type="checkbox" class="mails-item__check-btn "></input>
            <div class="mails-item_photo">
              <img src="@img/загрузка.jpg" alt="image description"/>
            </div>
            <div class="mails-item__name">Name Lastname</div>
            <div class="mails-item__text">Beginning of sms</div>
          </div>
          <div class="mails-body__ietm mails-item">
            <input type="checkbox" class="mails-item__check-btn "></input>
            <div class="mails-item_photo">
              <img src="@img/harli.jpg" alt="image description"/>
            </div>
            <div class="mails-item__name">Name Lastname</div>
            <div class="mails-item__text">Beginning of sms</div>
          </div>
          <div class="mails-body__ietm mails-item">
            <input type="checkbox" class="mails-item__check-btn "></input>
            <div class="mails-item_photo">
              <img src="@img/avatar.jpg" alt="image description"/>
            </div>
            <div class="mails-item__name">Name Lastname</div>
            <div class="mails-item__text">Beginning of sms</div>
          </div>
          <div class="mails-body__ietm mails-item">
            <input type="checkbox" class="mails-item__check-btn "></input>
            <div class="mails-item_photo">
              <img src="@img/загрузка.jpg" alt="image description"/>
            </div>
            <div class="mails-item__name">Name Lastname</div>
            <div class="mails-item__text">Beginning of sms</div>
          </div>
          <div class="mails-body__ietm mails-item">
            <input type="checkbox" class="mails-item__check-btn "></input>
            <div class="mails-item_photo">
              <img src="@img/images.jpg" alt="image description"/>
            </div>
            <div class="mails-item__name">Name Lastname</div>
            <div class="mails-item__text">Beginning of sms</div>
          </div>
          <div class="mails-body__ietm mails-item">
            <input type="checkbox" class="mails-item__check-btn "></input>
            <div class="mails-item_photo">
              <img src="@img/images.jpg" alt="image description"/>
            </div>
            <div class="mails-item__name">Name Lastname</div>
            <div class="mails-item__text">Beginning of sms</div>
          </div>
          <div class="mails-body__ietm mails-item">
            <input type="checkbox" class="mails-item__check-btn "></input>
            <div class="mails-item_photo">
              <img src="@img/harli.jpg" alt="image description"/>
            </div>
            <div class="mails-item__name">Name Lastname</div>
            <div class="mails-item__text">Beginning of sms</div>
          </div>
          <div class="mails-body__ietm mails-item">
            <input type="checkbox" class="mails-item__check-btn "></input>
            <div class="mails-item_photo">
              <img src="@img/avatar.jpg" alt="image description"/>
            </div>
            <div class="mails-item__name">Name Lastname</div>
            <div class="mails-item__text">Beginning of sms</div>
          </div>
          <div class="mails-body__ietm mails-item">
            <input type="checkbox" class="mails-item__check-btn "></input>
            <div class="mails-item_photo">
              <img src="@img/загрузка.jpg" alt="image description"/>
            </div>
            <div class="mails-item__name">Name Lastname</div>
            <div class="mails-item__text">Beginning of sms</div>
          </div>
        </div> 

        <div class="mails-body__taxtarea">
          <textarea resai id="" name="message" rows="" cols="" placeholder="Type your message here...."></textarea>
        </div>
      </div>

 

    </div>
  )
}
export default Mails
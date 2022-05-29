import React from 'react';



const PersonMail = ({ person , togleFavirite}) => {

  return (
    <div id="tab_02" className="workplace__tabs-block blok-mail">
    <div className="blok-mail__wrapper">

      <textarea id="massege-chat" name="message-chat" rows="" cols="" className="blok-mail__textarea"
        placeholder="Type your message here...."></textarea>

      <div className="blok-mail__footer">
        <button type="button" className="blok-mail__add-file _icon-attachment">Attach your file</button>
        <button type="button" className="blok-mail__mail-send send-button">SEND</button>
      </div>
    </div>
  </div>
  )

}

export default PersonMail
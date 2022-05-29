import React from 'react';
import { useState, useEffect } from 'react';
import Button from '../Button';




const PeoplesFuter = ({persons}) => {
    
  const [totalUsersCount, setTotalUsersCount] = useState(250) // with server
  const [pagesCount, setPagesCount] = useState(0)
  const [summItemsForWrapper, setSummItemsForWrapper] = useState(0)
  const [wrapperWidth, setWrapperWidth] = useState(0)

  const [activePeoplePage, setActivePeoplePage] = useState(0)
  const [visiblуPeoplesFooterItems, setVisiblуPeoplesFooterItems] = useState(0)


  useEffect(() => {
    const peopleFooterWrapper = document.querySelector('.peoples-footer__wrapper');
    setPagesCount(Math.ceil(totalUsersCount / 9))
    setWrapperWidth(peopleFooterWrapper.offsetWidth)
    setSummItemsForWrapper(parseInt((wrapperWidth / 30)))
    if (pagesCount > summItemsForWrapper) {
      setVisiblуPeoplesFooterItems(summItemsForWrapper)
    } else {
      setVisiblуPeoplesFooterItems(pagesCount)
    }
    //      window.onresize = function () {
    //       const peopleFooterWrapper =( document.querySelector('.peoples-footer__wrapper'));
    // setWrapperWidth(peopleFooterWrapper.offsetWidth)
    //       };
  })

  const hendlePrevBth = () => {activePeoplePage === 0 
    ? setActivePeoplePage(activePeoplePage)
    :setActivePeoplePage(activePeoplePage - 1) }
  const hendleNextBth = () => {activePeoplePage === pagesCount 
    ? setActivePeoplePage(activePeoplePage)
    :setActivePeoplePage(activePeoplePage + 1) }

  return (

      <div className='peoples__footer peoples-footer'>
        <Button onClick={hendlePrevBth}
          className='peoples-footer__button-prev _icon-arrow-left'
          text='prev'
        />

        <div className='peoples-footer__wrapper'>
          {
            new Array(visiblуPeoplesFooterItems).fill('').map((e, i) => {
              if (pagesCount > visiblуPeoplesFooterItems && i === visiblуPeoplesFooterItems - 1) {
                return (
                  <div
                    key={i + e}
                    onClick={() => setActivePeoplePage(i)}
                    className={'peoples-footer__item'}
                  >...</div>
                )
              } else {
                return (
                  <div
                    key={i + e}
                    onClick={() => setActivePeoplePage(i)}
                    className={
                      activePeoplePage === i
                        ? "peoples-footer__item _active"
                        : 'peoples-footer__item'
                    }
                  >{i + 1}</div>
                )
              }

            })
          }
        </div>

        <Button onClick={hendleNextBth}
          className='peoples-footer__button-next _icon-arrow-right'
          text='next'
        />
      </div>

  )
}

export default PeoplesFuter
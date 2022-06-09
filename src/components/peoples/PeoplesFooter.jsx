import React from 'react'
import { useState, useEffect } from 'react'
import Button from '../Button'


const PeoplesFuter = () => {
  const totalUsersCount = 250

  const [pagesCount, setPagesCount] = useState(0)
  const [activePage, setActivePage] = useState(1)

  const [visiblуPeoplesFooterItems, setVisiblуPeoplesFooterItems] = useState(0)

  useEffect(() => {
    const peopleFooterWrapper = document.querySelector('.peoples-footer__wrapper')
    const wrapperWidth = peopleFooterWrapper.offsetWidth
    setPagesCount(Math.ceil(totalUsersCount / 9))
    const itemsForWrapper = parseInt((wrapperWidth / 30))
    if (pagesCount > itemsForWrapper) {
      setVisiblуPeoplesFooterItems(itemsForWrapper)
    } else {
      setVisiblуPeoplesFooterItems(pagesCount)
    }
  })

  useEffect(() => {
    console.log('setActivePage', activePage)
  }, [activePage])

  const hendlePrevBth = () => {
    activePage === 1
      ? setActivePage(activePage)
      : setActivePage(activePage - 1)
  }
  const hendleNextBth = () => {
    activePage === pagesCount
      ? setActivePage(activePage)
      : setActivePage(activePage + 1)
  }
  const hendleActivatePeoplePage = i => {
    setActivePage(i)
  }

  return (

    <div className='peoples__footer peoples-footer'>
      <Button onClick={hendlePrevBth}
        className='peoples-footer__button-prev _icon-arrow-left'
        text='prev'
      />

      <div className='peoples-footer__wrapper'>
        {
          new Array(visiblуPeoplesFooterItems)
            .fill('')
            .map((e, i) => i === 0 ? activePage - 10 : activePage + i - 10)
            .map((e, i) => {
              if (e > pagesCount || e < 1) {
                return
              }
              if (pagesCount > visiblуPeoplesFooterItems && i === visiblуPeoplesFooterItems - 1) {
                return (
                  <div
                    key={i + e}
                    onClick={() => hendleActivatePeoplePage(i)}
                    className={'peoples-footer__item'}
                  >...</div>
                )
              } else {
                return (
                  <div
                    key={i + e}
                    onClick={() => hendleActivatePeoplePage(e)}
                    className={
                      activePage === e
                        ? 'peoples-footer__item _active'
                        : 'peoples-footer__item'
                    }
                  >{e}</div>
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
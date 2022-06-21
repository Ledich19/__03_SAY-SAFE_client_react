import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import personalService from '../../services/personal'
import { activePageChenge } from '../../reducers/peoples/peoplesFilterReducer'
import { BiArrowFromRight } from 'react-icons/bi'
import { BiArrowFromLeft } from 'react-icons/bi'



const PeoplesFuter = () => {
  // const [, setTotalUsersCount] = useState(0)
  const [activePage, setActivePage] = useState(1)
  const [pagesCount, setPagesCount] = useState(1)
  const [visiblуItems, setVisiblуItems] = useState([])
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(activePageChenge(activePage))
  }, [activePage])

  // const dispatch = useDispatch()

  useEffect(() => {
    personalService.getCount(filter)
      .then(count => {
        const totalUsersCount = count
        console.log(count, count)
        const peopleFooterWrapper = document.querySelector('.peoples-footer__wrapper')
        const wrapperWidth = peopleFooterWrapper.offsetWidth
        setPagesCount(Math.ceil(totalUsersCount / 9))
        const itemsForWrapper = parseInt((wrapperWidth / 30))
        const visiblуPeoplesFooterItems = (pagesCount <= itemsForWrapper)
          ? pagesCount
          : itemsForWrapper

        let mapFunction
        if (itemsForWrapper > pagesCount) {
          mapFunction = (i) => i + 1
        } else if (activePage < visiblуPeoplesFooterItems / 2) {
          mapFunction = (i) => i + 1
        } else if (activePage >= pagesCount - Math.floor(visiblуPeoplesFooterItems / 2) && visiblуPeoplesFooterItems < pagesCount) {
          mapFunction = (i) => pagesCount - visiblуPeoplesFooterItems + 1 + i
        }
        else {
          mapFunction = (i) => activePage + i - Math.floor(visiblуPeoplesFooterItems / 2)
        }
        const visiblуItems = new Array(visiblуPeoplesFooterItems)
          .fill('')
          .map((e, i) => {
            return mapFunction(i)
          })
        setVisiblуItems(visiblуItems)
      })
  }, [activePage, pagesCount])



  useEffect(() => {
  }, [activePage])

  const hendlePrevBth = () => {
    activePage === 1
      ? setActivePage(activePage)
      : setActivePage(activePage - 1)
  }
  const hendleNextBth = () => {
    activePage === visiblуItems[visiblуItems.length - 1]
      ? setActivePage(activePage)
      : setActivePage(activePage + 1)
  }
  const hendleActivatePeoplePage = i => {
    setActivePage(i)
  }

  return (

    <div className='peoples__footer peoples-footer'>

      <button
        type='button'
        onClick={hendlePrevBth}
        className='peoples-footer__button-prev'>
        {<BiArrowFromRight />}prev</button>


      <div className='peoples-footer__wrapper'>
        {
          visiblуItems.map((e, i) => {
            if (e === visiblуItems[visiblуItems.length - 1] && visiblуItems[visiblуItems.length - 1] !== pagesCount) {
              return (
                <div
                  key={i + e}
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

      <button
        type='button'
        onClick={hendleNextBth}
        className='peoples-footer__button-next'>
        {<BiArrowFromLeft />}next</button>


    </div>

  )
}

export default PeoplesFuter
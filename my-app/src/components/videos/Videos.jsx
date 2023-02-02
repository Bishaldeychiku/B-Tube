import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import '../videos/video.scss'

import moment from 'moment'
import numeral from 'numeral'
import { useEffect } from 'react';
import request from '../../api';
import { useState } from 'react';
export default function Videos({ video }) {
  const { id, snippet: { channelId, channelTitle, publishedAt, title, thumbnails: { medium } } } = video;


  const [viewCount, setviewCount] = useState(null)
  const [duration, setduration] = useState(null)
  const [channelIcon, setChannelIcon] = useState(null)

  const seconds = moment.duration(duration).asSeconds()
  const timeofthevideo = moment.utc(seconds * 1000).format('mm:ss')
  useEffect(() => {
    const getDuraction = async () => {
      const { data: { items } } = await request('/videos', {
        params: {
          part: 'contentDetails,statistics',
          id: id
        }
      })
      setduration(items[0].contentDetails.duration);
      setviewCount(items[0].statistics.viewCount)
      console.log(items)
    }
    getDuraction()
  }, [id])


  useEffect(() => {
    const get_channel_icon = async () => {
       const { data: { items }} = await request('/channels', {
          params: {
             part: 'snippet',
             id: channelId,
          },
       })
       setChannelIcon(items[0].snippet.thumbnails.default)
    }
    get_channel_icon()
 }, [channelId])
  // useEffect(() => {
  //   const get_channel_icon = async () => {
  //     const { data:{items} } = await request('/channels', {
  //       params: {
  //         part: 'snippet',
  //         id: 'channelId'
  //       },
  //     })
  //     console.log(videos)

  //    //setChannelIcon(items[0].snippet.thumbnails.default)
  //   }
  //   get_channel_icon()
  // }, [channelId])
  return (
    <>
      <div className='video'>

        <div className='video__top'>
          <img src={medium.url}
            alt='thumbnil' />
          <span>{timeofthevideo}</span>
        </div>

        <div className='video__title'>
          {title}
        </div >

        <div className='video__details'>
          <span>
            <AiFillEye />{numeral(viewCount).format('0.a')} views •
          </span>
          <span> {moment(publishedAt).fromNow()}</span>
        </div>

        <div className='video__chanel'>
          <img
            src={channelIcon?.url}
            alt=''
          />
          <p>{channelTitle}</p>
        </div>
      </div>

    </>
  )
}

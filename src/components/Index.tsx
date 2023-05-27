import React, { useRef, useState} from 'react'
import XXSScreen from '../components/2XSScreen'
import XSScreen from './XSScreen'
import SMScreen from './SMScreen'
import MDScreen from './MDScreen'
import LGScreen from './LGScreen'
import XLScreen from './XLScreen'
import XXLScreen from './2XLScreen'
import { useEffect } from 'react'



function Index() {

  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, []);

  console.log('Width is' + width)
  if (width >= 320 && width < 420) {
    return (
      <>
        <main className='h-full'>
          <div style={{ width: '100%', height: '100%' }}>
            <XXSScreen />
          </div>
        </main>
      </>
    )
  } else if (width >= 420 && width < 640) {
    return (
      <>
        <main className='h-full'>
          <div style={{ width: '100%', height: '100%' }}>
            <XSScreen />
          </div>
        </main>
      </>
    )
  } else if (width >= 640 && width < 768) {
    return (
      <>
        <main className='h-full'>
          <div style={{ width: '100%', height: '100%' }}>
            <SMScreen />
          </div>
        </main>
      </>
    )
  } else if (width >= 768 && width < 1024) {
    return (
      <>
        <main className='h-full'>
          <div style={{ width: '100%', height: '100%' }}>
            <MDScreen />
          </div>
        </main>
      </>
    )
  } else if (width >= 1024 && width < 1280) {
    return (
      <>
        <main className='h-full'>
          <div style={{ width: '100%', height: '100%' }}>
            <LGScreen />
          </div>
        </main>
      </>
    )
  } else if (width >= 1280 && width < 1536) {
    return (
      <>
        <main className='h-full'>
          <div style={{ width: '100%', height: '100%' }}>
            <XLScreen />
          </div>
        </main>
      </>
    )
  } else if(width >= 1536) {
    return (
      <>
        <main className='h-full'>
          <div style={{ width: '100%', height: '100%' }}>
            <XXLScreen />
          </div>
        </main>
      </>
    )

  }

}

export default Index
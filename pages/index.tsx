import React from 'react'
import Layout from '../components/Layout'
import FullCalendar from '@fullcalendar/react'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Next.js</h1>
  </Layout>
)

// change to this after starting 'dev' script
/*
const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Next.js</h1>
    <div className="container">
      <FullCalendar
        plugins={[resourceTimelinePlugin]}
        initialView='resourceTimelineDay'
        initialEvents={[
          { title: 'test event', start: new Date(), resourceId: 'a' }
        ]}
        initialResources={[
          { id: 'a', title: 'Auditorium A' },
          { id: 'b', title: 'Auditorium B' },
          { id: 'c', title: 'Auditorium C' }
        ]}
      />
    </div>
  </Layout>
)
*/

export default IndexPage

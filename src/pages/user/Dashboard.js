import React from 'react'
import Layout from '../../components/Layout/layout'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/auth'

const Dashboard = () => {
    const [auth] = useAuth()
      return (
    <Layout title={'Dashboard- Shopify'}>
       <div className="container-fluid p-3 m-3">
            <div className='row'>
                <div className='col-md-3'>
                    <UserMenu/>
                </div>
                <div className='col-md-9'>
                <div className="card w-70 p-2">
                    <h3>User Name: {auth?.user?.name}</h3>
                    <h3>User Email: {auth?.user?.email}</h3>
                    <h3>User address: {auth?.user?.address}</h3>
                </div>

                </div>

                
            </div>
        </div>
    </Layout>
  )
}

export default Dashboard

import React from 'react';
import AdminSiderbar from './AdminSidebar'
import ShowProducts from './ShowProducts';
import { Row, Col } from 'react-bootstrap';
import AdminHeader from './AdminHeader';
export default function BodyAdmin() {
  return (
    <div>
      
      <Row>
        <Col>
          <AdminHeader />
        </Col>
      </Row>

      <Row>
        <Col xs={2} className='bg-body-tertiary py-5 '>
          <AdminSiderbar />
        </Col>
        <Col xs={10} className='py-5 p-5'>
          <ShowProducts />
        </Col>
      </Row>
    </div>
  );
}

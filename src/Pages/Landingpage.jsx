import React from 'react';
import {Card, Col, Row} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function Landingpage() {
  const navigateByUrl = useNavigate()
  return (
    <>
    <Row className="mt-5 align-items-center justify-content-between w-100">
      <Col></Col>
      <Col lg={5}>
      <h1 style={{fontSize:"40px"}}>Welcome to <span className='text-warning'></span> Media-Player</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quo nemo cumque. Excepturi, harum magni. Aut consectetur magnam voluptatum saepe quia aperiam id quos enim aliquid esse nesciunt, inventore assumenda?
      Unde odit, esse accusamus temporibus odio atque veniam nostrum cum eligendi repellendus corrupti soluta, praesentium vitae? Unde voluptatibus quod facere incidunt ad, voluptatum rem sit quam? Possimus nemo non laudantium.
      Mollitia quaerat nesciunt laudantium voluptate earum placeat repellat totam tempore illo consequuntur sint repudiandae officiis nam magni quam, incidunt minus rerum tempora cumque quis ad labore provident? Rem, iusto possimus.</p>
      <button onClick={()=>navigateByUrl('/home')} className='btn btn-warning mt-4'>Get Started</button>
      </Col>
      <Col lg={5}>
      <img src="https://png.pngtree.com/background/20230612/original/pngtree-woman-wearing-headphones-sitting-with-abstract-background-picture-image_3173754.jpg" alt="" style={{width:"100%"}} />
      </Col>
      <Col></Col>
    </Row>
    <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
        <h3>Features</h3>
        <div className="cards d-flex justify-content-around w-100 flex-wrap">
          <Card style={{ width: '22rem' }} className="p-4 bg-dark m-2">
            <Card.Img
              variant="top"
              height={'300px'}
              width={'300px'}
              src="https://img.freepik.com/premium-photo/3d-animation-style-cartoon-character-illustration-dj_1029473-93341.jpg"
            />
            <Card.Body>
              <Card.Title className="text-primary ">Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '22rem' }} className="p-4 bg-dark m-2">
            <Card.Img
              variant="top"
              height={'300px'}
              width={'300px'}
              src="https://img.freepik.com/premium-photo/cute-diver-playing-dj-electronic-music-with-headphone-cartoon-vector-icon-illustration-science-flat_839035-1023235.jpg"
            />
            <Card.Body>
              <Card.Title className="text-primary ">Categorized</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '22rem' }} className="p-4 bg-dark m-2">
            <Card.Img
              variant="top"
              height={'300px'}
              width={'300px'}
              src="https://img.freepik.com/premium-photo/cute-diver-playing-dj-electronic-music-with-headphone-cartoon-vector-icon-illustration-science-flat_839035-1022772.jpg"
            />
            <Card.Body>
              <Card.Title className="text-primary ">Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100'>
        <div className='col-lg-5'>
          <h4 className='text-warning'>Simple,Powerful & Fast</h4>
          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Perspiciatis ipsum expedita non quas dignissimos voluptatem dolor at saepe sint dolores consectetur nulla laborum, porro nesciunt? Expedita fugiat praesentium atque animi?</h6>

          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Perspiciatis ipsum expedita non quas dignissimos voluptatem dolor at saepe sint dolores consectetur nulla laborum, porro nesciunt? Expedita fugiat praesentium atque animi?
         </h6>

          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Perspiciatis ipsum expedita non quas dignissimos voluptatem dolor at saepe sint dolores consectetur nulla laborum, porro nesciunt? Expedita fugiat praesentium atque animi?
          </h6>
        </div>
        <div className='video col-lg-5'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8Fzc14ftwN4?si=yNnzXlvJJidtXmXX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

      </div>
    </>
    
  )
}

export default Landingpage

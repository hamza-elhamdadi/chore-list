import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const days_in_week = 7;
const people = ['Chloe', 'Hee Joong', 'Hamza', 'Srishti']
const colors = ['#8dd3c7','#80b1d3','#bebada','#fb8072']
const shifted_index = [1,0,3,2]

const choreList = [
  [
    'Clean downstairs and upstairs bathroom (mop floor and clean toilet and sink)'
  ],
  [
    'Put up drying rack dishes this week',
    'Wash bath mat, bathroom rug, hand towels in both bathrooms, and kitchen drying rags'
  ],
  [
    'Take out indoor trash to backyard bins this week',
    'Empty bathroom trash can',
    'Take out trash bins to curb on Sunday'
  ],
  [
    'Wipe down the kitchen counters',
    'Sweep the kitchen and dining room',
    'Mop the kitchen and dining room'
  ]
]

function isWeek(week, shift, name){
  return ((week+shift)%8)-name === 0 || ((week+shift)%8)-(4+shifted_index[name]) === 0
}

function getChores(name) {
  
  const startDate = new Date('September 18, 2023')
  const currDate = new Date();
  const amount_time = currDate.getTime() - startDate.getTime();
  const num_days = Math.floor(amount_time / (1000 * 3600 * 24));
  const week = (Math.floor(num_days/days_in_week)+name)%4;
  
  return choreList[week]
}

function Chores() {
  return (
    <Container style={{paddingTop: '10px'}}>
      <Row>
        <Col className='text-center'>
          <b>Today's Date:</b> {(new Date()).toString()}
        </Col>
      </Row>
      <Row>
        {people.map((name,i) => 
          <Col key={"column"+i} xs={12} sm={12} md={12} lg={3} xl={3} style={{marginTop: '10px', marginBottom: '10px'}}>
            <Card className='text-center' key={"card"+i}>
              <Card.Header><b>{name}</b></Card.Header>
              <Card.Body>
                  <ListGroup>
                    <ListGroup.Item style={{backgroundColor: colors[i], color: 'white'}}>
                      Weekly Chores
                    </ListGroup.Item>
                    {getChores(i).map((chore,j) => 
                      <ListGroup.Item key={'chore'+i+j}>
                        {chore}
                      </ListGroup.Item>  
                    )}
                  </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Chores;

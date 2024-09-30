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
    'Clean bathroom sinks (magic eraser and water)',
    'Clean bathroom toilets from top to bottom (all purpose cleaner spray bottle and rags)',
    'Clean bathroom toilet bowls (toilet bowl cleaner)',
    'Pick up big trash items from bathroom floors',
    'Mop bathroom floors (1/2 tsp all purpose cleaner in mop bucket)'
  ],
  [
    'Free Week (enjoy the weekend!)'
  ],
  [
    'Take out indoor trash to backyard bins this week',
    'Empty bathroom trash can',
    'Take out trash bins to curb on Sunday'
  ],
  [
    'Clean the microwave (all purpose cleaner spray bottle)',
    'Wipe down the kitchen counters (all purpose cleaner spray bottle)',
    'Sweep the kitchen and dining room',
    'Mop the kitchen and dining room (1/2 tsp all purpose cleaner in mop bucket)',
    'Wash bath mat, bathroom rug, hand towels in both bathrooms, and kitchen drying rags'
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

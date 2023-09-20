import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const days_in_week = 7;
const people = ['Chloe', 'Mariana', 'Hamza', 'Srishti']
const colors = ['#8dd3c7','#80b1d3','#bebada','#fb8072']
const shifted_index = [1,0,3,2]
// const 

function isWeek(week, shift, name){
  return ((week+shift)%8)-name == 0 || ((week+shift)%8)-(4+shifted_index[name]) == 0
}

function getChores(name) {
  
  const startDate = new Date('September 17, 2023')
  const currDate = new Date();
  const num_days = currDate.getDate() - startDate.getDate();
  // const num_days = days_in_week*0 + 5;
  const num_days_mod_56 = num_days%(days_in_week*8);
  const week = Math.floor(num_days_mod_56/days_in_week);

  let choreList = [];
  if(isWeek(week, 0, name)) {
    choreList.push('Take out indoor trash to backyard bins this week');
    choreList.push('Empty bathroom trash can')
    choreList.push('Take out trash bins to curb on Sunday');
  }
  if(isWeek(week, 1, name)) {
    choreList.push('Put up drying rack dishes this week')
  }
  if(isWeek(week, 2, name)) {
    choreList.push('Spray shower with after shower spray')
  }
  if(isWeek(week, 3, name)) {
    choreList.push('Wash bath mat, bathroom rug, hand towels in both bathrooms, and kitchen drying rags')
  }
  if(choreList.length == 0){
    choreList.push('None this week')
  }

  return choreList;
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
          <Col xs={12} sm={12} md={12} lg={3} xl={3} style={{marginTop: '10px', marginBottom: '10px'}}>
            <Card className='text-center' >
              <Card.Header><b>{name}</b></Card.Header>
              <Card.Body>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item style={{backgroundColor: colors[i], color: 'white'}}>
                      Weekly Chores
                    </ListGroup.Item>
                    {getChores(i).map(chore => 
                      <ListGroup.Item>
                        {chore}
                      </ListGroup.Item>  
                    )}
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Chores;

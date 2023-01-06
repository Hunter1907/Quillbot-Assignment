import './second.css'
import { Card, Container,CardActions, CardContent, Typography } from '@mui/material';
import { Grid} from '@material-ui/core';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

const Second = () => {
  return (
    <div>
       <p className='secondhead'>Experience the full power of QuillBot</p>
       <Container alignItems="center" justify="center" >
        <Grid container spacing={3}>
        <Grid item lg={6}>
        <Card variant="outlined" className='cards' >
            <CardContent  className="free">
              <Typography variant="p">FREE</Typography>
            </CardContent>
            <CardActions>
                <button className="btnsign">Sign Up - It's Free</button>
            </CardActions>
            <CardContent>
            <hr/><Typography>< DoneIcon className='right'/><span/> 125 words in the Paraphraser</Typography><hr/>
                        <Typography>< DoneIcon className='right'/>Standard and Fluency modes</Typography><hr/>
                        <Typography>< DoneIcon className='right'/>3 synonym options</Typography><hr/>
                        <Typography>< DoneIcon className='right'/>1 Freeze word or phrase</Typography><hr/>
                        <Typography>< DoneIcon className='right'/>1200 words in the Summarizer</Typography><hr/>
                        <Typography><ClearIcon  className='wrong'/>Faster processing speed</Typography><hr/>
                        <Typography><ClearIcon className='wrong'/>Advanced grammer rewrites</Typography><hr/>
                        <Typography><ClearIcon className='wrong'/>Compare Modes (Desktop only)</Typography><hr/>
                        <Typography><ClearIcon className='wrong'/>Plagiarism Checker*</Typography><hr/>
                        <Typography><ClearIcon className='wrong'/>Tone detection</Typography><hr/>
                        <Typography className='last'>No Credit Card Required</Typography>
                    </CardContent>  
                </Card> 
        </Grid>
        <Grid item lg={6}>
        <Card variant="outlined" className='cards'>
                    <CardContent className='pre'>
                        <Typography variant="p">PREMIUM</Typography>
                    </CardContent>
                    <CardActions>
                        <button class="btnpre">Upgrade to Premium</button>
                    </CardActions>
                    <CardContent>
                    <hr/><Typography>< DoneIcon className='yright'/>Unlimited words in the Paraphraser
                      </Typography><hr/>
                        <Typography >< DoneIcon className='yright'/>Standard, Fluency, Expand, Shorten, Formal, Simple, and Creatives modes</Typography><hr/>
                        <Typography>< DoneIcon className='yright'/>1200 words in the Summarizer</Typography><hr/>
                        <Typography>< DoneIcon  className='yright'/>4 synonym options</Typography><hr/>
                        <Typography>< DoneIcon className='yright'/>Unlimited Freeze words and phrases</Typography><hr/>
                        <Typography>< DoneIcon className='yright'/>6000 words in the Summarizer</Typography><hr/>
                        <Typography>< DoneIcon className='yright'/>Faster processing speed</Typography><hr/>
                        <Typography>< DoneIcon className='yright'/>Advanced grammer rewrites</Typography><hr/>
                        <Typography>< DoneIcon className='yright'/>Compare Modes (Desktop only)</Typography><hr/>
                        <Typography>< DoneIcon className='yright'/>Plagiarism Checker*</Typography><hr/>
                        <Typography>< DoneIcon className='yright'/>Tone detection</Typography><hr/>
                        <Typography className='last'>3-Day Money-Back Guarantee</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Second
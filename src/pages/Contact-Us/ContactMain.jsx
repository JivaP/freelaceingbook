import React from 'react'
import ContactUs from './Contact-Us'
import { Box, Container, Grid } from '@mui/material'
import Form from '../../Common/ui/form/Form'

export default function ContactMain() {
    return (
        <>
            <ContactUs />
            <Box sx={{ py: 4 }}>

                <Container>

                    <Grid container>
                        <Grid size={{ xs: 12, md: 7 }} >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3670.608785041645!2d72.6656!3d23.0748!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86c4b61ea593%3A0xcd2f5943f3eba362!2sAhmedabad%2C%20Gujarat%20382345!5e0!3m2!1sen!2sin!4v1754671465538!5m2!1sen!2sin" width="600" height="570" loading="lazy"></iframe>
                        </Grid>
                        <Form />
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

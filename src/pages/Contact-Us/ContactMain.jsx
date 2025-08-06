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
                            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5946.180557925402!2d72.82655547001407!3d19.10865830900625!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1754500060777!5m2!1sen!2sin" width="600" height="570" loading="lazy"></iframe>
                        </Grid>
                        <Form />
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

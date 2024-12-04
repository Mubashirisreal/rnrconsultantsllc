import React from 'react';
import { Mail, Phone, Clock } from 'lucide-react';
import { Container } from './layout/Container';
import { Section } from './layout/Section';
import { Typography } from './ui/Typography';
import { Card } from './ui/Card';

export function Contact() {
  return (
    <Section id="contact" className="bg-white">
      <Container>
        <div className="text-center mb-16">
          <Typography variant="h2" className="font-sans font-extrabold text-gray-900 mb-4">
            Let's Talk About Your Future Success
          </Typography>
          <Typography variant="p" className="text-xl text-gray-600 font-medium">
            Begin your journey towards excellence with us
          </Typography>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card>
            <div className="flex flex-col items-center text-center">
              <Mail className="h-8 w-8 text-secondary mb-4" />
              <Typography variant="h4" className="font-sans font-extrabold mb-2">Email</Typography>
              <Typography variant="p" className="text-gray-600">
                info@rnrconsultants.com
              </Typography>
            </div>
          </Card>

          <Card>
            <div className="flex flex-col items-center text-center">
              <Phone className="h-8 w-8 text-secondary mb-4" />
              <Typography variant="h4" className="font-sans font-extrabold mb-2">Phone</Typography>
              <Typography variant="p" className="text-gray-600">
                +1-234-567-890
              </Typography>
            </div>
          </Card>

          <Card>
            <div className="flex flex-col items-center text-center">
              <Clock className="h-8 w-8 text-secondary mb-4" />
              <Typography variant="h4" className="font-sans font-extrabold mb-2">Office Hours</Typography>
              <Typography variant="p" className="text-gray-600">
                Monday – Friday
                <br />
                9:00 AM – 6:00 PM (Local Time)
              </Typography>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
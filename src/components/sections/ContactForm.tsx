'use client'

import { useState } from 'react'
import emailjs from 'emailjs-com'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import { Textarea } from '../ui/textarea'

export default function ContactForm() {
    const [loading, setLoading] = useState(false)

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const form = e.currentTarget // Store it BEFORE async operation

        try {
            const response = await emailjs.sendForm(
                'service_kkm6y8r',
                'template_it0g4f7',
                form,
                '1vNrtUdKAEeu8EOHE'
            )

            if (response.status === 200) {
                toast.success('Message sent!')
                form.reset()
            } else {
                toast.error('Failed to send message')
            }
        } catch (error) {
            console.error('EmailJS error:', error)
            toast.error('Failed to send message')
        } finally {
            setLoading(false)
        }
    }


    return (
        <Card className="w-full mx-auto p-6">
            <CardContent className="space-y-6">
                <form onSubmit={sendEmail} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Subject</Label>
                        <Input id="title" name="title" required />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" required />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" name="user_email" required />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" name="message" rows={5} required />
                    </div>

                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

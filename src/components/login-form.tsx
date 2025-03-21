import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create a new Person</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter all fields to save new person
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="me@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex">
            <Label htmlFor="firstName">First Name</Label>
          </div>
          <Input id="firstName" type="text" required />
          <div className="flex">
            <Label htmlFor="lastName">Last Name</Label>
          </div>
          <Input id="lastName" type="text" required />
        </div>
        <Button type="submit" className="w-full">
          Save
        </Button>
        
      </div>
      
    </form>
  )
}

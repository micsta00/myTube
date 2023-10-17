import { Menu } from "lucide-react"
import logo from "../assets/logo.png"
import { Button } from "../components/Button"

export function PageHeader() {
    return (<div className="flex gap-10 lg:gap=20 justify-between">
        <div className="flex gap-4 items-center flex-shrink-0">
            <Button variant="ghost" size="icon" className="bg-red-500">
                <Menu />
            </Button>
            <a href="/">
                <img src={logo} alt="" className="h-6" />
            </a>
        </div>
        <div></div>
        <div></div>
    </div>)
}
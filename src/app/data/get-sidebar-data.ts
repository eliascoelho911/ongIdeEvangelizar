import { NavMainProps } from "@/components/nav-dropdown";
import { NavUserProps } from "@/components/nav-user";
import { User } from "@/types/user";
import { GraduationCap } from "lucide-react";

const data = (currentUrl: string): NavMainProps => {
    function isActiveUrl(currentUrl: string, url: string) {
        return currentUrl === url;
    }

    function isOpen(currentUrl: string, url: string) {
        return currentUrl.startsWith(url);
    }

    function createItem(title: string, url: string) {
        return {
            title: title,
            url: url,
            isActive: isActiveUrl(currentUrl, url)
        }
    }

    return {
        navMain: [
            {
                title: "Sistema",
                content: [
                    {
                        title: "Alunos",
                        url: "/alunos",
                        icon: GraduationCap,
                        isOpen: isOpen(currentUrl, "/alunos"),
                        items: [
                            createItem("Listar alunos", "/alunos"),
                            createItem("Matricular", "/alunos/adicionar"),
                        ],
                    }
                ]
            } 
        ]
    }
}

export function getNavUserData(user: User): NavUserProps | null {
    return user && user.name ? {
        user: {
            name: user.name,
            email: user.email,
            avatar: user.avatarUrl || undefined
        }
    } : null;
}

export function getNavMainData(currentUrl: string): NavMainProps {
    return data(currentUrl);
}
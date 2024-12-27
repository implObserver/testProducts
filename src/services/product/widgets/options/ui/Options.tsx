import { ExternalReset, ExternalResetContext } from "@/common/features/externalReset";
import { useCustomState } from "@/common/shared/lib"
import { ButtonForActionMenu } from "@/common/shared/ui/buttonForActionMenu"
import { Dropdown, DropdownContext } from "@/common/shared/ui/dropdownElement";
import { Container } from "../components/container";

export const Options = () => {
    const isOpen = useCustomState();

    const clickHandle = () => {
        isOpen.setState(true);
    }

    const dropdownContext: DropdownContextType = {
        state: isOpen.getState(),
        margin: false,
    }

    const externalResetContext: ExternalResetContextType = {
        state: isOpen,
        index: `product_menu`,
    }

    return (
        <div onClick={clickHandle}>
            <ExternalResetContext.Provider value={externalResetContext}>
                <ExternalReset>
                    <ButtonForActionMenu></ButtonForActionMenu>
                    <DropdownContext.Provider value={dropdownContext}>
                        <Dropdown>
                            <Container></Container>
                        </Dropdown>
                    </DropdownContext.Provider>
                </ExternalReset>
            </ExternalResetContext.Provider>
        </div>
    )
}
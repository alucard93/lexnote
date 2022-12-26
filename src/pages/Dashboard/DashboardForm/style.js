import styled from "styled-components";

export const StyledDashboardForm = styled.div`
    gap: 16px;
    padding: 1.5rem 1.5rem 2rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;

    .content{
        align-items: flex-start;
        gap: 16px;
    }

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;
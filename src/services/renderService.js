import * as request from '~/untils/httpRequest';

export const render = async (q, type = 'less') => {
    try {
        const res = await request.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return res.data
    } catch (error) {
    }
};

render();
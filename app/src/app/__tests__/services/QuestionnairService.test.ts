import Axios from 'app/services/index';
import {
  getQuestionnaire,
  createNewQuestionnaireResponse,
  CreateNewQuestionnaireResponseParams,
} from 'app/services/QuestionnaireService'; // Make sure to replace 'yourModule' with the actual path to your module

import axios from 'axios';

jest.mock('axios');

describe('Questionnaire API', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch questionnaire data successfully', async () => {
    const mockData = {
      /* Mock your response data here */
    };
    // axios.get.mockResolvedValueOnce({ data: mockData });

    // const result = await getQuestionnaire();

    // expect(result).toEqual(mockData);
    // expect(axios.get).toHaveBeenCalledWith('/questions');
  });

  // it('should create a new questionnaire response successfully', async () => {
  //   const mockResponseData = {
  //     /* Mock your response data here */
  //   };
  //   const mockParams = {
  //     /* Mock your request params here */
  //   };
  //   axios.post.mockResolvedValueOnce({ data: mockResponseData });

  //   const result = await createNewQuestionnaireResponse(mockParams);

  //   expect(result).toEqual(mockResponseData);
  //   expect(axios.post).toHaveBeenCalledWith('/questions', mockParams);
  // });
});

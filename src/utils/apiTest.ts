// API Test Utility
import axios from 'axios';
import { API_ENDPOINTS } from '../config/api';

export const testApiConnection = async () => {
  try {
    console.log('Testing API connection to:', API_ENDPOINTS.health);
    
    const response = await axios.get(API_ENDPOINTS.health, {
      timeout: 10000
    });
    
    console.log('✅ API connection successful:', response.data);
    return { success: true, data: response.data };
  } catch (error) {
    console.error('❌ API connection failed:', error);
    return { success: false, error };
  }
};

export const testConversationStart = async (projectIdea: string) => {
  try {
    console.log('Testing conversation start with:', projectIdea);
    
    const response = await axios.post(API_ENDPOINTS.conversation.start, {
      project_idea: projectIdea
    }, {
      timeout: 30000
    });
    
    console.log('✅ Conversation start successful:', response.data);
    return { success: true, data: response.data };
  } catch (error) {
    console.error('❌ Conversation start failed:', error);
    return { success: false, error };
  }
}; 
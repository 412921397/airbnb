import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** 路由发生跳转页面滚动到顶部 */
export default function useScrollTop() {
  const location = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [location.pathname]);
}

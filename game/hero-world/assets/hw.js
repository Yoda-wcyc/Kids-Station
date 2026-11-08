(()=>{var Nx=Object.defineProperty;var Kn=(n,t)=>{for(var e in t)Nx(n,e,{get:t[e],enumerable:!0})};var Pp=0,jh=1,Lp=2;var Ro=1,Dp=2,wr=3,ys=0,Pn=1,Qn=2,Pi=0,Ar=1,Qh=2,tu=3,eu=4,Np=5;var Os=100,Up=101,Fp=102,Op=103,zp=104,Bp=200,kp=201,Vp=202,Hp=203,nu=204,iu=205,Gp=206,Wp=207,Xp=208,qp=209,Yp=210,$p=211,Zp=212,Jp=213,Kp=214,Za=0,Ja=1,Ka=2,yr=3,ja=4,Qa=5,tl=6,el=7,su=0,jp=1,Qp=2,ui=0,ru=1,ou=2,au=3,lu=4,cu=5,hu=6,uu=7;var fu=300,_s=301,zs=302,Pl=303,Ll=304,Io=306,nl=1e3,Ei=1001,il=1002,pn=1003,tm=1004;var Po=1005;var an=1006,Dl=1007;var vs=1008;var Xn=1009,du=1010,pu=1011,Er=1012,Nl=1013,fi=1014,di=1015,pi=1016,Ul=1017,Fl=1018,Tr=1020,mu=35902,gu=35899,xu=1021,yu=1022,ti=1023,Ti=1026,Ms=1027,_u=1028,Ol=1029,bs=1030,zl=1031;var Bl=1033,Lo=33776,Do=33777,No=33778,Uo=33779,kl=35840,Vl=35841,Hl=35842,Gl=35843,Wl=36196,Xl=37492,ql=37496,Yl=37488,$l=37489,Fo=37490,Zl=37491,Jl=37808,Kl=37809,jl=37810,Ql=37811,tc=37812,ec=37813,nc=37814,ic=37815,sc=37816,rc=37817,oc=37818,ac=37819,lc=37820,cc=37821,hc=36492,uc=36494,fc=36495,dc=36283,pc=36284,Oo=36285,mc=36286;var ao=2300,sl=2301,qa=2302,Xh=2303,qh=2400,Yh=2401,$h=2402;var em=3200;var vu=0,nm=1,Yi="",en="srgb",lo="srgb-linear",co="linear",Ue="srgb";var Ya=7680;var im=519,sm=512,rm=513,om=514,gc=515,am=516,lm=517,xc=518,cm=519,Mu=35044;var bu="300 es",hi=2e3,ho=2001;function Ux(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Fx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function uo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hm(){let n=uo("canvas");return n.style.display="block",n}var sp={},_r=null;function fo(...n){let t="THREE."+n.shift();_r?_r("log",t,...n):console.log(t,...n)}function um(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ae(...n){n=um(n);let t="THREE."+n.shift();if(_r)_r("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function he(...n){n=um(n);let t="THREE."+n.shift();if(_r)_r("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ns(...n){let t=n.join(" ");t in sp||(sp[t]=!0,ae(...n))}function fm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var dm={[Za]:Ja,[Ka]:tl,[ja]:el,[yr]:Qa,[Ja]:Za,[tl]:Ka,[el]:ja,[Qa]:yr},Ci=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $a=Math.PI/180,rl=180/Math.PI;function cs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]).toLowerCase()}function Ce(n,t,e){return Math.max(t,Math.min(e,n))}function Ox(n,t){return(n%t+t)%t}function Mh(n,t,e){return(1-e)*n+e*t}function wi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ke(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Tu=class Tu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ce(this.x,t.x,e.x),this.y=Ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ce(this.x,t,e),this.y=Ce(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Tu.prototype.isVector2=!0;var be=Tu,Ri=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let u=i[s+0],h=i[s+1],m=i[s+2],f=i[s+3],d=r[o+0],x=r[o+1],p=r[o+2],M=r[o+3];if(f!==M||u!==d||h!==x||m!==p){let y=u*d+h*x+m*p+f*M;y<0&&(d=-d,x=-x,p=-p,M=-M,y=-y);let g=1-a;if(y<.9995){let P=Math.acos(y),F=Math.sin(P);g=Math.sin(g*P)/F,a=Math.sin(a*P)/F,u=u*g+d*a,h=h*g+x*a,m=m*g+p*a,f=f*g+M*a}else{u=u*g+d*a,h=h*g+x*a,m=m*g+p*a,f=f*g+M*a;let P=1/Math.sqrt(u*u+h*h+m*m+f*f);u*=P,h*=P,m*=P,f*=P}}t[e]=u,t[e+1]=h,t[e+2]=m,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],u=i[s+1],h=i[s+2],m=i[s+3],f=r[o],d=r[o+1],x=r[o+2],p=r[o+3];return t[e]=a*p+m*f+u*x-h*d,t[e+1]=u*p+m*d+h*f-a*x,t[e+2]=h*p+m*x+a*d-u*f,t[e+3]=m*p-a*f-u*d-h*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,u=Math.sin,h=a(i/2),m=a(s/2),f=a(r/2),d=u(i/2),x=u(s/2),p=u(r/2);switch(o){case"XYZ":this._x=d*m*f+h*x*p,this._y=h*x*f-d*m*p,this._z=h*m*p+d*x*f,this._w=h*m*f-d*x*p;break;case"YXZ":this._x=d*m*f+h*x*p,this._y=h*x*f-d*m*p,this._z=h*m*p-d*x*f,this._w=h*m*f+d*x*p;break;case"ZXY":this._x=d*m*f-h*x*p,this._y=h*x*f+d*m*p,this._z=h*m*p+d*x*f,this._w=h*m*f-d*x*p;break;case"ZYX":this._x=d*m*f-h*x*p,this._y=h*x*f+d*m*p,this._z=h*m*p-d*x*f,this._w=h*m*f+d*x*p;break;case"YZX":this._x=d*m*f+h*x*p,this._y=h*x*f+d*m*p,this._z=h*m*p-d*x*f,this._w=h*m*f-d*x*p;break;case"XZY":this._x=d*m*f-h*x*p,this._y=h*x*f-d*m*p,this._z=h*m*p+d*x*f,this._w=h*m*f+d*x*p;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],u=e[9],h=e[2],m=e[6],f=e[10],d=i+a+f;if(d>0){let x=.5/Math.sqrt(d+1);this._w=.25/x,this._x=(m-u)*x,this._y=(r-h)*x,this._z=(o-s)*x}else if(i>a&&i>f){let x=2*Math.sqrt(1+i-a-f);this._w=(m-u)/x,this._x=.25*x,this._y=(s+o)/x,this._z=(r+h)/x}else if(a>f){let x=2*Math.sqrt(1+a-i-f);this._w=(r-h)/x,this._x=(s+o)/x,this._y=.25*x,this._z=(u+m)/x}else{let x=2*Math.sqrt(1+f-i-a);this._w=(o-s)/x,this._x=(r+h)/x,this._y=(u+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,u=e._y,h=e._z,m=e._w;return this._x=i*m+o*a+s*h-r*u,this._y=s*m+o*u+r*a-i*h,this._z=r*m+o*h+i*u-s*a,this._w=o*m-i*a-s*u-r*h,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let u=1-e;if(a<.9995){let h=Math.acos(a),m=Math.sin(h);u=Math.sin(u*h)/m,e=Math.sin(e*h)/m,this._x=this._x*u+i*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+o*e,this._onChangeCallback()}else this._x=this._x*u+i*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Cu=class Cu{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,u=t.w,h=2*(o*s-a*i),m=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+u*h+o*f-a*m,this.y=i+u*m+a*h-r*f,this.z=s+u*f+r*m-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ce(this.x,t.x,e.x),this.y=Ce(this.y,t.y,e.y),this.z=Ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ce(this.x,t,e),this.y=Ce(this.y,t,e),this.z=Ce(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,u=e.z;return this.x=s*u-r*a,this.y=r*o-i*u,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return bh.copy(this).projectOnVector(t),this.sub(bh)}reflect(t){return this.sub(bh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Cu.prototype.isVector3=!0;var Q=Cu,bh=new Q,rp=new Ri,Ru=class Ru{constructor(t,e,i,s,r,o,a,u,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,u,h)}set(t,e,i,s,r,o,a,u,h){let m=this.elements;return m[0]=t,m[1]=s,m[2]=a,m[3]=e,m[4]=r,m[5]=u,m[6]=i,m[7]=o,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],u=i[6],h=i[1],m=i[4],f=i[7],d=i[2],x=i[5],p=i[8],M=s[0],y=s[3],g=s[6],P=s[1],F=s[4],E=s[7],C=s[2],w=s[5],D=s[8];return r[0]=o*M+a*P+u*C,r[3]=o*y+a*F+u*w,r[6]=o*g+a*E+u*D,r[1]=h*M+m*P+f*C,r[4]=h*y+m*F+f*w,r[7]=h*g+m*E+f*D,r[2]=d*M+x*P+p*C,r[5]=d*y+x*F+p*w,r[8]=d*g+x*E+p*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],u=t[6],h=t[7],m=t[8];return e*o*m-e*a*h-i*r*m+i*a*u+s*r*h-s*o*u}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],u=t[6],h=t[7],m=t[8],f=m*o-a*h,d=a*u-m*r,x=h*r-o*u,p=e*f+i*d+s*x;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/p;return t[0]=f*M,t[1]=(s*h-m*i)*M,t[2]=(a*i-s*o)*M,t[3]=d*M,t[4]=(m*e-s*u)*M,t[5]=(s*r-a*e)*M,t[6]=x*M,t[7]=(i*u-h*e)*M,t[8]=(o*e-i*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let u=Math.cos(r),h=Math.sin(r);return this.set(i*u,i*h,-i*(u*o+h*a)+o+t,-s*h,s*u,-s*(-h*o+u*a)+a+e,0,0,1),this}scale(t,e){return Ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sh.makeScale(t,e)),this}rotate(t){return Ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sh.makeRotation(-t)),this}translate(t,e){return Ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ru.prototype.isMatrix3=!0;var pe=Ru,Sh=new pe,op=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ap=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zx(){let n={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ue&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ue&&(s.r=xr(s.r),s.g=xr(s.g),s.b=xr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yi?co:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ns("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ns("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[lo]:{primaries:t,whitePoint:i,transfer:co,toXYZ:op,fromXYZ:ap,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:i,transfer:Ue,toXYZ:op,fromXYZ:ap,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),n}var Ae=zx();function Xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var tr,ol=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{tr===void 0&&(tr=uo("canvas")),tr.width=t.width,tr.height=t.height;let s=tr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=tr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=uo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xi(e[i]/255)*255):e[i]=Xi(e[i]);return{data:e,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bx=0,vr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(wh(s[o].image)):r.push(wh(s[o]))}else r=wh(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function wh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ol.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}var kx=0,Ah=new Q,xn=class n extends Ci{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ei,s=Ei,r=an,o=vs,a=ti,u=Xn,h=n.DEFAULT_ANISOTROPY,m=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=cs(),this.name="",this.source=new vr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=u,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ah).x}get height(){return this.source.getSize(Ah).y}get depth(){return this.source.getSize(Ah).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){ae(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nl:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case il:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nl:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case il:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=fu;xn.DEFAULT_ANISOTROPY=1;var Iu=class Iu{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,u=t.elements,h=u[0],m=u[4],f=u[8],d=u[1],x=u[5],p=u[9],M=u[2],y=u[6],g=u[10];if(Math.abs(m-d)<.01&&Math.abs(f-M)<.01&&Math.abs(p-y)<.01){if(Math.abs(m+d)<.1&&Math.abs(f+M)<.1&&Math.abs(p+y)<.1&&Math.abs(h+x+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let F=(h+1)/2,E=(x+1)/2,C=(g+1)/2,w=(m+d)/4,D=(f+M)/4,b=(p+y)/4;return F>E&&F>C?F<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(F),s=w/i,r=D/i):E>C?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=w/s,r=b/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=D/r,s=b/r),this.set(i,s,r,e),this}let P=Math.sqrt((y-p)*(y-p)+(f-M)*(f-M)+(d-m)*(d-m));return Math.abs(P)<.001&&(P=1),this.x=(y-p)/P,this.y=(f-M)/P,this.z=(d-m)/P,this.w=Math.acos((h+x+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ce(this.x,t.x,e.x),this.y=Ce(this.y,t.y,e.y),this.z=Ce(this.z,t.z,e.z),this.w=Ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ce(this.x,t,e),this.y=Ce(this.y,t,e),this.z=Ce(this.z,t,e),this.w=Ce(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Iu.prototype.isVector4=!0;var Ze=Iu,al=class extends Ci{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ze(0,0,t,e),this.scissorTest=!1,this.viewport=new Ze(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new xn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new vr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends al{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},po=class extends xn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ll=class extends xn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Il=class Il{constructor(t,e,i,s,r,o,a,u,h,m,f,d,x,p,M,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,u,h,m,f,d,x,p,M,y)}set(t,e,i,s,r,o,a,u,h,m,f,d,x,p,M,y){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=u,g[2]=h,g[6]=m,g[10]=f,g[14]=d,g[3]=x,g[7]=p,g[11]=M,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Il().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/er.setFromMatrixColumn(t,0).length(),r=1/er.setFromMatrixColumn(t,1).length(),o=1/er.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),u=Math.cos(s),h=Math.sin(s),m=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=o*m,x=o*f,p=a*m,M=a*f;e[0]=u*m,e[4]=-u*f,e[8]=h,e[1]=x+p*h,e[5]=d-M*h,e[9]=-a*u,e[2]=M-d*h,e[6]=p+x*h,e[10]=o*u}else if(t.order==="YXZ"){let d=u*m,x=u*f,p=h*m,M=h*f;e[0]=d+M*a,e[4]=p*a-x,e[8]=o*h,e[1]=o*f,e[5]=o*m,e[9]=-a,e[2]=x*a-p,e[6]=M+d*a,e[10]=o*u}else if(t.order==="ZXY"){let d=u*m,x=u*f,p=h*m,M=h*f;e[0]=d-M*a,e[4]=-o*f,e[8]=p+x*a,e[1]=x+p*a,e[5]=o*m,e[9]=M-d*a,e[2]=-o*h,e[6]=a,e[10]=o*u}else if(t.order==="ZYX"){let d=o*m,x=o*f,p=a*m,M=a*f;e[0]=u*m,e[4]=p*h-x,e[8]=d*h+M,e[1]=u*f,e[5]=M*h+d,e[9]=x*h-p,e[2]=-h,e[6]=a*u,e[10]=o*u}else if(t.order==="YZX"){let d=o*u,x=o*h,p=a*u,M=a*h;e[0]=u*m,e[4]=M-d*f,e[8]=p*f+x,e[1]=f,e[5]=o*m,e[9]=-a*m,e[2]=-h*m,e[6]=x*f+p,e[10]=d-M*f}else if(t.order==="XZY"){let d=o*u,x=o*h,p=a*u,M=a*h;e[0]=u*m,e[4]=-f,e[8]=h*m,e[1]=d*f+M,e[5]=o*m,e[9]=x*f-p,e[2]=p*f-x,e[6]=a*m,e[10]=M*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vx,t,Hx)}lookAt(t,e,i){let s=this.elements;return Vn.subVectors(t,e),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),ss.crossVectors(i,Vn),ss.lengthSq()===0&&(Math.abs(i.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),ss.crossVectors(i,Vn)),ss.normalize(),xa.crossVectors(Vn,ss),s[0]=ss.x,s[4]=xa.x,s[8]=Vn.x,s[1]=ss.y,s[5]=xa.y,s[9]=Vn.y,s[2]=ss.z,s[6]=xa.z,s[10]=Vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],u=i[8],h=i[12],m=i[1],f=i[5],d=i[9],x=i[13],p=i[2],M=i[6],y=i[10],g=i[14],P=i[3],F=i[7],E=i[11],C=i[15],w=s[0],D=s[4],b=s[8],R=s[12],N=s[1],O=s[5],J=s[9],j=s[13],k=s[2],et=s[6],B=s[10],q=s[14],tt=s[3],Z=s[7],it=s[11],rt=s[15];return r[0]=o*w+a*N+u*k+h*tt,r[4]=o*D+a*O+u*et+h*Z,r[8]=o*b+a*J+u*B+h*it,r[12]=o*R+a*j+u*q+h*rt,r[1]=m*w+f*N+d*k+x*tt,r[5]=m*D+f*O+d*et+x*Z,r[9]=m*b+f*J+d*B+x*it,r[13]=m*R+f*j+d*q+x*rt,r[2]=p*w+M*N+y*k+g*tt,r[6]=p*D+M*O+y*et+g*Z,r[10]=p*b+M*J+y*B+g*it,r[14]=p*R+M*j+y*q+g*rt,r[3]=P*w+F*N+E*k+C*tt,r[7]=P*D+F*O+E*et+C*Z,r[11]=P*b+F*J+E*B+C*it,r[15]=P*R+F*j+E*q+C*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],u=t[9],h=t[13],m=t[2],f=t[6],d=t[10],x=t[14],p=t[3],M=t[7],y=t[11],g=t[15],P=u*x-h*d,F=a*x-h*f,E=a*d-u*f,C=o*x-h*m,w=o*d-u*m,D=o*f-a*m;return e*(M*P-y*F+g*E)-i*(p*P-y*C+g*w)+s*(p*F-M*C+g*D)-r*(p*E-M*w+y*D)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],u=t[2],h=t[6],m=t[10];return e*(o*m-a*h)-i*(r*m-a*u)+s*(r*h-o*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],u=t[6],h=t[7],m=t[8],f=t[9],d=t[10],x=t[11],p=t[12],M=t[13],y=t[14],g=t[15],P=e*a-i*o,F=e*u-s*o,E=e*h-r*o,C=i*u-s*a,w=i*h-r*a,D=s*h-r*u,b=m*M-f*p,R=m*y-d*p,N=m*g-x*p,O=f*y-d*M,J=f*g-x*M,j=d*g-x*y,k=P*j-F*J+E*O+C*N-w*R+D*b;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let et=1/k;return t[0]=(a*j-u*J+h*O)*et,t[1]=(s*J-i*j-r*O)*et,t[2]=(M*D-y*w+g*C)*et,t[3]=(d*w-f*D-x*C)*et,t[4]=(u*N-o*j-h*R)*et,t[5]=(e*j-s*N+r*R)*et,t[6]=(y*E-p*D-g*F)*et,t[7]=(m*D-d*E+x*F)*et,t[8]=(o*J-a*N+h*b)*et,t[9]=(i*N-e*J-r*b)*et,t[10]=(p*w-M*E+g*P)*et,t[11]=(f*E-m*w-x*P)*et,t[12]=(a*R-o*O-u*b)*et,t[13]=(e*O-i*R+s*b)*et,t[14]=(M*F-p*C-y*P)*et,t[15]=(m*C-f*F+d*P)*et,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,u=t.z,h=r*o,m=r*a;return this.set(h*o+i,h*a-s*u,h*u+s*a,0,h*a+s*u,m*a+i,m*u-s*o,0,h*u-s*a,m*u+s*o,r*u*u+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,u=e._w,h=r+r,m=o+o,f=a+a,d=r*h,x=r*m,p=r*f,M=o*m,y=o*f,g=a*f,P=u*h,F=u*m,E=u*f,C=i.x,w=i.y,D=i.z;return s[0]=(1-(M+g))*C,s[1]=(x+E)*C,s[2]=(p-F)*C,s[3]=0,s[4]=(x-E)*w,s[5]=(1-(d+g))*w,s[6]=(y+P)*w,s[7]=0,s[8]=(p+F)*D,s[9]=(y-P)*D,s[10]=(1-(d+M))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=er.set(s[0],s[1],s[2]).length(),a=er.set(s[4],s[5],s[6]).length(),u=er.set(s[8],s[9],s[10]).length();r<0&&(o=-o),oi.copy(this);let h=1/o,m=1/a,f=1/u;return oi.elements[0]*=h,oi.elements[1]*=h,oi.elements[2]*=h,oi.elements[4]*=m,oi.elements[5]*=m,oi.elements[6]*=m,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,e.setFromRotationMatrix(oi),i.x=o,i.y=a,i.z=u,this}makePerspective(t,e,i,s,r,o,a=hi,u=!1){let h=this.elements,m=2*r/(e-t),f=2*r/(i-s),d=(e+t)/(e-t),x=(i+s)/(i-s),p,M;if(u)p=r/(o-r),M=o*r/(o-r);else if(a===hi)p=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===ho)p=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=m,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=f,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=p,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=hi,u=!1){let h=this.elements,m=2/(e-t),f=2/(i-s),d=-(e+t)/(e-t),x=-(i+s)/(i-s),p,M;if(u)p=1/(o-r),M=o/(o-r);else if(a===hi)p=-2/(o-r),M=-(o+r)/(o-r);else if(a===ho)p=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=m,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=f,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=p,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Il.prototype.isMatrix4=!0;var $e=Il,er=new Q,oi=new $e,Vx=new Q(0,0,0),Hx=new Q(1,1,1),ss=new Q,xa=new Q,Vn=new Q,lp=new $e,cp=new Ri,hs=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],u=s[1],h=s[5],m=s[9],f=s[2],d=s[6],x=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(a,x),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,x),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-Ce(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,x),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,x));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-m,x),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return lp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lp,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cp.setFromEuler(this),this.setFromQuaternion(cp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hs.DEFAULT_ORDER="XYZ";var mo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gx=0,hp=new Q,nr=new Ri,ki=new $e,ya=new Q,Qr=new Q,Wx=new Q,Xx=new Ri,up=new Q(1,0,0),fp=new Q(0,1,0),dp=new Q(0,0,1),pp={type:"added"},qx={type:"removed"},ir={type:"childadded",child:null},Eh={type:"childremoved",child:null},In=class n extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new Q,e=new hs,i=new Ri,s=new Q(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new pe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.multiply(nr),this}rotateOnWorldAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.premultiply(nr),this}rotateX(t){return this.rotateOnAxis(up,t)}rotateY(t){return this.rotateOnAxis(fp,t)}rotateZ(t){return this.rotateOnAxis(dp,t)}translateOnAxis(t,e){return hp.copy(t).applyQuaternion(this.quaternion),this.position.add(hp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(up,t)}translateY(t){return this.translateOnAxis(fp,t)}translateZ(t){return this.translateOnAxis(dp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ya.copy(t):ya.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(Qr,ya,this.up):ki.lookAt(ya,Qr,this.up),this.quaternion.setFromRotationMatrix(ki),s&&(ki.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(ki),this.quaternion.premultiply(nr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(he("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pp),ir.child=t,this.dispatchEvent(ir),ir.child=null):he("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qx),Eh.child=t,this.dispatchEvent(Eh),Eh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pp),ir.child=t,this.dispatchEvent(ir),ir.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,t,Wx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,Xx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let u=a.shapes;if(Array.isArray(u))for(let h=0,m=u.length;h<m;h++){let f=u[h];r(t.shapes,f)}else r(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let u=0,h=this.material.length;u<h;u++)a.push(r(t.materials,this.material[u]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let u=this.animations[a];s.animations.push(r(t.animations,u))}}if(e){let a=o(t.geometries),u=o(t.materials),h=o(t.textures),m=o(t.images),f=o(t.shapes),d=o(t.skeletons),x=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),u.length>0&&(i.materials=u),h.length>0&&(i.textures=h),m.length>0&&(i.images=m),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),x.length>0&&(i.animations=x),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let u=[];for(let h in a){let m=a[h];delete m.metadata,u.push(m)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};In.DEFAULT_UP=new Q(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gn=class extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yx={type:"move"},Mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,u=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let M of t.hand.values()){let y=e.getJointPose(M,i),g=this._getHandJoint(h,M);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}let m=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],d=m.position.distanceTo(f.position),x=.02,p=.005;h.inputState.pinching&&d>x+p?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=x-p&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yx)))}return a!==null&&(a.visible=s!==null),u!==null&&(u.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new gn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Th(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ue=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ae.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Ae.workingColorSpace){if(t=Ox(t,1),e=Ce(e,0,1),i=Ce(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Th(o,r,t+1/3),this.g=Th(o,r,t),this.b=Th(o,r,t-1/3)}return Ae.colorSpaceToWorking(this,s),this}setStyle(t,e=en){function i(r){r!==void 0&&parseFloat(r)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ae("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){let i=pm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=xr(t.r),this.g=xr(t.g),this.b=xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return Ae.workingToColorSpace(_n.copy(this),t),Math.round(Ce(_n.r*255,0,255))*65536+Math.round(Ce(_n.g*255,0,255))*256+Math.round(Ce(_n.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.workingToColorSpace(_n.copy(this),e);let i=_n.r,s=_n.g,r=_n.b,o=Math.max(i,s,r),a=Math.min(i,s,r),u,h,m=(a+o)/2;if(a===o)u=0,h=0;else{let f=o-a;switch(h=m<=.5?f/(o+a):f/(2-o-a),o){case i:u=(s-r)/f+(s<r?6:0);break;case s:u=(r-i)/f+2;break;case r:u=(i-s)/f+4;break}u/=6}return t.h=u,t.s=h,t.l=m,t}getRGB(t,e=Ae.workingColorSpace){return Ae.workingToColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=en){Ae.workingToColorSpace(_n.copy(this),t);let e=_n.r,i=_n.g,s=_n.b;return t!==en?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(rs),this.setHSL(rs.h+t,rs.s+e,rs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(rs),t.getHSL(_a);let i=Mh(rs.h,_a.h,e),s=Mh(rs.s,_a.s,e),r=Mh(rs.l,_a.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new ue;ue.NAMES=pm;var go=class extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hs,this.environmentIntensity=1,this.environmentRotation=new hs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ai=new Q,Vi=new Q,Ch=new Q,Hi=new Q,sr=new Q,rr=new Q,mp=new Q,Rh=new Q,Ih=new Q,Ph=new Q,Lh=new Ze,Dh=new Ze,Nh=new Ze,Ai=class n{constructor(t=new Q,e=new Q,i=new Q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ai.subVectors(t,e),s.cross(ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ai.subVectors(s,e),Vi.subVectors(i,e),Ch.subVectors(t,e);let o=ai.dot(ai),a=ai.dot(Vi),u=ai.dot(Ch),h=Vi.dot(Vi),m=Vi.dot(Ch),f=o*h-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,x=(h*u-a*m)*d,p=(o*m-a*u)*d;return r.set(1-x-p,p,x)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(t,e,i,s,r,o,a,u){return this.getBarycoord(t,e,i,s,Hi)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,Hi.x),u.addScaledVector(o,Hi.y),u.addScaledVector(a,Hi.z),u)}static getInterpolatedAttribute(t,e,i,s,r,o){return Lh.setScalar(0),Dh.setScalar(0),Nh.setScalar(0),Lh.fromBufferAttribute(t,e),Dh.fromBufferAttribute(t,i),Nh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Lh,r.x),o.addScaledVector(Dh,r.y),o.addScaledVector(Nh,r.z),o}static isFrontFacing(t,e,i,s){return ai.subVectors(i,e),Vi.subVectors(t,e),ai.cross(Vi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),ai.cross(Vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;sr.subVectors(s,i),rr.subVectors(r,i),Rh.subVectors(t,i);let u=sr.dot(Rh),h=rr.dot(Rh);if(u<=0&&h<=0)return e.copy(i);Ih.subVectors(t,s);let m=sr.dot(Ih),f=rr.dot(Ih);if(m>=0&&f<=m)return e.copy(s);let d=u*f-m*h;if(d<=0&&u>=0&&m<=0)return o=u/(u-m),e.copy(i).addScaledVector(sr,o);Ph.subVectors(t,r);let x=sr.dot(Ph),p=rr.dot(Ph);if(p>=0&&x<=p)return e.copy(r);let M=x*h-u*p;if(M<=0&&h>=0&&p<=0)return a=h/(h-p),e.copy(i).addScaledVector(rr,a);let y=m*p-x*f;if(y<=0&&f-m>=0&&x-p>=0)return mp.subVectors(r,s),a=(f-m)/(f-m+(x-p)),e.copy(s).addScaledVector(mp,a);let g=1/(y+M+d);return o=M*g,a=d*g,e.copy(i).addScaledVector(sr,o).addScaledVector(rr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},us=class{constructor(t=new Q(1/0,1/0,1/0),e=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,li):li.fromBufferAttribute(r,o),li.applyMatrix4(t.matrixWorld),this.expandByPoint(li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),va.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),va.copy(i.boundingBox)),va.applyMatrix4(t.matrixWorld),this.union(va)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,li),li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(to),Ma.subVectors(this.max,to),or.subVectors(t.a,to),ar.subVectors(t.b,to),lr.subVectors(t.c,to),os.subVectors(ar,or),as.subVectors(lr,ar),Is.subVectors(or,lr);let e=[0,-os.z,os.y,0,-as.z,as.y,0,-Is.z,Is.y,os.z,0,-os.x,as.z,0,-as.x,Is.z,0,-Is.x,-os.y,os.x,0,-as.y,as.x,0,-Is.y,Is.x,0];return!Uh(e,or,ar,lr,Ma)||(e=[1,0,0,0,1,0,0,0,1],!Uh(e,or,ar,lr,Ma))?!1:(ba.crossVectors(os,as),e=[ba.x,ba.y,ba.z],Uh(e,or,ar,lr,Ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Gi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],li=new Q,va=new us,or=new Q,ar=new Q,lr=new Q,os=new Q,as=new Q,Is=new Q,to=new Q,Ma=new Q,ba=new Q,Ps=new Q;function Uh(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ps.fromArray(n,r);let a=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),u=t.dot(Ps),h=e.dot(Ps),m=i.dot(Ps);if(Math.max(-Math.max(u,h,m),Math.min(u,h,m))>a)return!1}return!0}var on=new Q,Sa=new be,$x=0,je=class extends Ci{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$x++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Mu,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Sa.fromBufferAttribute(this,e),Sa.applyMatrix3(t),this.setXY(e,Sa.x,Sa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix3(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=wi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var xo=class extends je{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var yo=class extends je{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Rn=class extends je{constructor(t,e,i){super(new Float32Array(t),e,i)}},Zx=new us,eo=new Q,Fh=new Q,fs=class{constructor(t=new Q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Zx.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;eo.subVectors(t,this.center);let e=eo.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(eo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(eo.copy(t.center).add(Fh)),this.expandByPoint(eo.copy(t.center).sub(Fh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Jx=0,jn=new $e,Oh=new In,cr=new Q,Hn=new us,no=new us,dn=new Q,cn=class n extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ux(t)?yo:xo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new pe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return jn.makeRotationFromQuaternion(t),this.applyMatrix4(jn),this}rotateX(t){return jn.makeRotationX(t),this.applyMatrix4(jn),this}rotateY(t){return jn.makeRotationY(t),this.applyMatrix4(jn),this}rotateZ(t){return jn.makeRotationZ(t),this.applyMatrix4(jn),this}translate(t,e,i){return jn.makeTranslation(t,e,i),this.applyMatrix4(jn),this}scale(t,e,i){return jn.makeScale(t,e,i),this.applyMatrix4(jn),this}lookAt(t){return Oh.lookAt(t),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rn(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&he('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){let i=this.boundingSphere.center;if(Hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];no.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(Hn.min,no.min),Hn.expandByPoint(dn),dn.addVectors(Hn.max,no.max),Hn.expandByPoint(dn)):(Hn.expandByPoint(no.min),Hn.expandByPoint(no.max))}Hn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)dn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(dn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],u=this.morphTargetsRelative;for(let h=0,m=a.count;h<m;h++)dn.fromBufferAttribute(a,h),u&&(cr.fromBufferAttribute(t,h),dn.add(cr)),s=Math.max(s,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&he('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){he("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new je(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],u=[];for(let b=0;b<i.count;b++)a[b]=new Q,u[b]=new Q;let h=new Q,m=new Q,f=new Q,d=new be,x=new be,p=new be,M=new Q,y=new Q;function g(b,R,N){h.fromBufferAttribute(i,b),m.fromBufferAttribute(i,R),f.fromBufferAttribute(i,N),d.fromBufferAttribute(r,b),x.fromBufferAttribute(r,R),p.fromBufferAttribute(r,N),m.sub(h),f.sub(h),x.sub(d),p.sub(d);let O=1/(x.x*p.y-p.x*x.y);isFinite(O)&&(M.copy(m).multiplyScalar(p.y).addScaledVector(f,-x.y).multiplyScalar(O),y.copy(f).multiplyScalar(x.x).addScaledVector(m,-p.x).multiplyScalar(O),a[b].add(M),a[R].add(M),a[N].add(M),u[b].add(y),u[R].add(y),u[N].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let b=0,R=P.length;b<R;++b){let N=P[b],O=N.start,J=N.count;for(let j=O,k=O+J;j<k;j+=3)g(t.getX(j+0),t.getX(j+1),t.getX(j+2))}let F=new Q,E=new Q,C=new Q,w=new Q;function D(b){C.fromBufferAttribute(s,b),w.copy(C);let R=a[b];F.copy(R),F.sub(C.multiplyScalar(C.dot(R))).normalize(),E.crossVectors(w,R);let O=E.dot(u[b])<0?-1:1;o.setXYZW(b,F.x,F.y,F.z,O)}for(let b=0,R=P.length;b<R;++b){let N=P[b],O=N.start,J=N.count;for(let j=O,k=O+J;j<k;j+=3)D(t.getX(j+0)),D(t.getX(j+1)),D(t.getX(j+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,x=i.count;d<x;d++)i.setXYZ(d,0,0,0);let s=new Q,r=new Q,o=new Q,a=new Q,u=new Q,h=new Q,m=new Q,f=new Q;if(t)for(let d=0,x=t.count;d<x;d+=3){let p=t.getX(d+0),M=t.getX(d+1),y=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,y),m.subVectors(o,r),f.subVectors(s,r),m.cross(f),a.fromBufferAttribute(i,p),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,y),a.add(m),u.add(m),h.add(m),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let d=0,x=e.count;d<x;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),m.subVectors(o,r),f.subVectors(s,r),m.cross(f),i.setXYZ(d+0,m.x,m.y,m.z),i.setXYZ(d+1,m.x,m.y,m.z),i.setXYZ(d+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)dn.fromBufferAttribute(t,e),dn.normalize(),t.setXYZ(e,dn.x,dn.y,dn.z)}toNonIndexed(){function t(a,u){let h=a.array,m=a.itemSize,f=a.normalized,d=new h.constructor(u.length*m),x=0,p=0;for(let M=0,y=u.length;M<y;M++){a.isInterleavedBufferAttribute?x=u[M]*a.data.stride+a.offset:x=u[M]*m;for(let g=0;g<m;g++)d[p++]=h[x++]}return new je(d,m,f)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let u=s[a],h=t(u,i);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let u=[],h=r[a];for(let m=0,f=h.length;m<f;m++){let d=h[m],x=t(d,i);u.push(x)}e.morphAttributes[a]=u}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,u=o.length;a<u;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let h in u)u[h]!==void 0&&(t[h]=u[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let u in i){let h=i[u];t.data.attributes[u]=h.toJSON(t.data)}let s={},r=!1;for(let u in this.morphAttributes){let h=this.morphAttributes[u],m=[];for(let f=0,d=h.length;f<d;f++){let x=h[f];m.push(x.toJSON(t.data))}m.length>0&&(s[u]=m,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let h in s){let m=s[h];this.setAttribute(h,m.clone(e))}let r=t.morphAttributes;for(let h in r){let m=[],f=r[h];for(let d=0,x=f.length;d<x;d++)m.push(f[d].clone(e));this.morphAttributes[h]=m}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,m=o.length;h<m;h++){let f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},cl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Mu,this.updateRanges=[],this.version=0,this.uuid=cs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Cn=new Q,_o=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.applyMatrix4(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.applyNormalMatrix(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.transformDirection(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=wi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){fo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){fo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},zh=new Q,Kx=new Q,jx=new pe,ci=class{constructor(t=new Q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=zh.subVectors(i,e).cross(Kx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(zh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||jx.getNormalMatrix(t),s=this.coplanarPoint(zh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Qx=0,Ii=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=Ar,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nu,this.blendDst=iu,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=im,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ya,this.stencilZFail=Ya,this.stencilZPass=Ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){ae(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let u=r[a];delete u.metadata,o.push(u)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ue().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ci().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new be().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new be().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},qi=class extends Ii{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},hr,io=new Q,ur=new Q,fr=new Q,dr=new be,so=new be,mm=new $e,wa=new Q,ro=new Q,Aa=new Q,gp=new be,Bh=new be,xp=new be,ds=class extends In{constructor(t=new qi){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new cn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new cl(e,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new _o(i,3,0,!1)),hr.setAttribute("uv",new _o(i,2,3,!1))}this.geometry=hr,this.material=t,this.center=new be(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&he('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ur.setFromMatrixScale(this.matrixWorld),mm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ur.multiplyScalar(-fr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Ea(wa.set(-.5,-.5,0),fr,o,ur,s,r),Ea(ro.set(.5,-.5,0),fr,o,ur,s,r),Ea(Aa.set(.5,.5,0),fr,o,ur,s,r),gp.set(0,0),Bh.set(1,0),xp.set(1,1);let a=t.ray.intersectTriangle(wa,ro,Aa,!1,io);if(a===null&&(Ea(ro.set(-.5,.5,0),fr,o,ur,s,r),Bh.set(0,1),a=t.ray.intersectTriangle(wa,Aa,ro,!1,io),a===null))return;let u=t.ray.origin.distanceTo(io);u<t.near||u>t.far||e.push({distance:u,point:io.clone(),uv:Ai.getInterpolation(io,wa,ro,Aa,gp,Bh,xp,new be),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ea(n,t,e,i,s,r){dr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(so.x=r*dr.x-s*dr.y,so.y=s*dr.x+r*dr.y):so.copy(dr),n.copy(t),n.x+=so.x,n.y+=so.y,n.applyMatrix4(mm)}var Wi=new Q,kh=new Q,Ta=new Q,Ca=new Q,br=class{constructor(t=new Q,e=new Q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wi.copy(this.origin).addScaledVector(this.direction,e),Wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){kh.copy(t).add(e).multiplyScalar(.5),Ta.copy(e).sub(t).normalize(),Ca.copy(this.origin).sub(kh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ta),a=Ca.dot(this.direction),u=-Ca.dot(Ta),h=Ca.lengthSq(),m=Math.abs(1-o*o),f,d,x,p;if(m>0)if(f=o*u-a,d=o*a-u,p=r*m,f>=0)if(d>=-p)if(d<=p){let M=1/m;f*=M,d*=M,x=f*(f+o*d+2*a)+d*(o*f+d+2*u)+h}else d=r,f=Math.max(0,-(o*d+a)),x=-f*f+d*(d+2*u)+h;else d=-r,f=Math.max(0,-(o*d+a)),x=-f*f+d*(d+2*u)+h;else d<=-p?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-u),r),x=-f*f+d*(d+2*u)+h):d<=p?(f=0,d=Math.min(Math.max(-r,-u),r),x=d*(d+2*u)+h):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-u),r),x=-f*f+d*(d+2*u)+h);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),x=-f*f+d*(d+2*u)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(kh).addScaledVector(Ta,d),x}intersectSphere(t,e){if(t.radius<0)return null;Wi.subVectors(t.center,this.origin);let i=Wi.dot(this.direction),s=Wi.dot(Wi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,u=i+o;return u<0?null:a<0?this.at(u,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,u,h=1/this.direction.x,m=1/this.direction.y,f=1/this.direction.z,d=this.origin;return h>=0?(i=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(i=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),m>=0?(r=(t.min.y-d.y)*m,o=(t.max.y-d.y)*m):(r=(t.max.y-d.y)*m,o=(t.min.y-d.y)*m),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,u=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,u=(t.min.z-d.z)*f),i>u||a>s)||((a>i||i!==i)&&(i=a),(u<s||s!==s)&&(s=u),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Wi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,u=a.x,h=a.y,m=a.z,f=t.x-o.x,d=t.y-o.y,x=t.z-o.z,p=e.x-o.x,M=e.y-o.y,y=e.z-o.z,g=i.x-o.x,P=i.y-o.y,F=i.z-o.z,E=Math.abs(u),C=Math.abs(h),w=Math.abs(m),D,b,R,N,O,J,j,k,et,B,q,tt;if(E>=C&&E>=w?(R=u,J=f,et=p,tt=g,u>=0?(D=h,b=m,N=d,O=x,j=M,k=y,B=P,q=F):(D=m,b=h,N=x,O=d,j=y,k=M,B=F,q=P)):C>=w?(R=h,J=d,et=M,tt=P,h>=0?(D=m,b=u,N=x,O=f,j=y,k=p,B=F,q=g):(D=u,b=m,N=f,O=x,j=p,k=y,B=g,q=F)):(R=m,J=x,et=y,tt=F,m>=0?(D=u,b=h,N=f,O=d,j=p,k=M,B=g,q=P):(D=h,b=u,N=d,O=f,j=M,k=p,B=P,q=g)),R===0)return null;let Z=D/R,it=b/R,rt=1/R,St=N-Z*J,Ct=O-it*J,Gt=j-Z*et,qt=k-it*et,Ft=B-Z*tt,W=q-it*tt,Y=Ft*qt-W*Gt,ut=St*W-Ct*Ft,mt=Gt*Ct-qt*St;if(s){if(Y<0||ut<0||mt<0)return null}else if((Y<0||ut<0||mt<0)&&(Y>0||ut>0||mt>0))return null;let _t=Y+ut+mt;if(_t===0)return null;let Pt=rt*(Y*J+ut*et+mt*tt);return(_t>0?Pt<0:Pt>0)?null:this.at(Pt/_t,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mn=class extends Ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hs,this.combine=su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},yp=new $e,Ls=new br,Ra=new fs,_p=new Q,Ia=new Q,Pa=new Q,La=new Q,Vh=new Q,Da=new Q,vp=new Q,Na=new Q,Ne=class extends In{constructor(t=new cn,e=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Da.set(0,0,0);for(let u=0,h=r.length;u<h;u++){let m=a[u],f=r[u];m!==0&&(Vh.fromBufferAttribute(f,t),o?Da.addScaledVector(Vh,m):Da.addScaledVector(Vh.sub(e),m))}e.add(Da)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(r),Ls.copy(t.ray).recast(t.near),!(Ra.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Ra,_p)===null||Ls.origin.distanceToSquared(_p)>(t.far-t.near)**2))&&(yp.copy(r).invert(),Ls.copy(t.ray).applyMatrix4(yp),!(i.boundingBox!==null&&Ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ls)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,u=r.attributes.position,h=r.attributes.uv,m=r.attributes.uv1,f=r.attributes.normal,d=r.groups,x=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,M=d.length;p<M;p++){let y=d[p],g=o[y.materialIndex],P=Math.max(y.start,x.start),F=Math.min(a.count,Math.min(y.start+y.count,x.start+x.count));for(let E=P,C=F;E<C;E+=3){let w=a.getX(E),D=a.getX(E+1),b=a.getX(E+2);s=Ua(this,g,t,i,h,m,f,w,D,b),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let p=Math.max(0,x.start),M=Math.min(a.count,x.start+x.count);for(let y=p,g=M;y<g;y+=3){let P=a.getX(y),F=a.getX(y+1),E=a.getX(y+2);s=Ua(this,o,t,i,h,m,f,P,F,E),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(o))for(let p=0,M=d.length;p<M;p++){let y=d[p],g=o[y.materialIndex],P=Math.max(y.start,x.start),F=Math.min(u.count,Math.min(y.start+y.count,x.start+x.count));for(let E=P,C=F;E<C;E+=3){let w=E,D=E+1,b=E+2;s=Ua(this,g,t,i,h,m,f,w,D,b),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let p=Math.max(0,x.start),M=Math.min(u.count,x.start+x.count);for(let y=p,g=M;y<g;y+=3){let P=y,F=y+1,E=y+2;s=Ua(this,o,t,i,h,m,f,P,F,E),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}};function ty(n,t,e,i,s,r,o,a){let u;if(t.side===Pn?u=i.intersectTriangle(o,r,s,!0,a):u=i.intersectTriangle(s,r,o,t.side===ys,a),u===null)return null;Na.copy(a),Na.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(Na);return h<e.near||h>e.far?null:{distance:h,point:Na.clone(),object:n}}function Ua(n,t,e,i,s,r,o,a,u,h){n.getVertexPosition(a,Ia),n.getVertexPosition(u,Pa),n.getVertexPosition(h,La);let m=ty(n,t,e,i,Ia,Pa,La,vp);if(m){let f=new Q;Ai.getBarycoord(vp,Ia,Pa,La,f),s&&(m.uv=Ai.getInterpolatedAttribute(s,a,u,h,f,new be)),r&&(m.uv1=Ai.getInterpolatedAttribute(r,a,u,h,f,new be)),o&&(m.normal=Ai.getInterpolatedAttribute(o,a,u,h,f,new Q),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));let d={a,b:u,c:h,normal:new Q,materialIndex:0};Ai.getNormal(Ia,Pa,La,d.normal),m.face=d,m.barycoord=f}return m}var hl=class extends xn{constructor(t=null,e=1,i=1,s,r,o,a,u,h=pn,m=pn,f,d){super(null,o,a,u,h,m,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ds=new fs,ey=new be(.5,.5),Fa=new Q,vo=class{constructor(t=new ci,e=new ci,i=new ci,s=new ci,r=new ci,o=new ci){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=hi,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],u=r[2],h=r[3],m=r[4],f=r[5],d=r[6],x=r[7],p=r[8],M=r[9],y=r[10],g=r[11],P=r[12],F=r[13],E=r[14],C=r[15];if(s[0].setComponents(h-o,x-m,g-p,C-P).normalize(),s[1].setComponents(h+o,x+m,g+p,C+P).normalize(),s[2].setComponents(h+a,x+f,g+M,C+F).normalize(),s[3].setComponents(h-a,x-f,g-M,C-F).normalize(),i)s[4].setComponents(u,d,y,E).normalize(),s[5].setComponents(h-u,x-d,g-y,C-E).normalize();else if(s[4].setComponents(h-u,x-d,g-y,C-E).normalize(),e===hi)s[5].setComponents(h+u,x+d,g+y,C+E).normalize();else if(e===ho)s[5].setComponents(u,d,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(t){Ds.center.set(0,0,0);let e=ey.distanceTo(t.center);return Ds.radius=.7071067811865476+e,Ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Fa.x=s.normal.x>0?t.max.x:t.min.x,Fa.y=s.normal.y>0?t.max.y:t.min.y,Fa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Us=class extends Ii{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ul=new Q,fl=new Q,Mp=new $e,oo=new br,Oa=new fs,Hh=new Q,bp=new Q,dl=class extends In{constructor(t=new cn,e=new Us){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ul.fromBufferAttribute(e,s-1),fl.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ul.distanceTo(fl);t.setAttribute("lineDistance",new Rn(i,1))}else ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(s),Oa.radius+=r,t.ray.intersectsSphere(Oa)===!1)return;Mp.copy(s).invert(),oo.copy(t.ray).applyMatrix4(Mp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,h=this.isLineSegments?2:1,m=i.index,d=i.attributes.position;if(m!==null){let x=Math.max(0,o.start),p=Math.min(m.count,o.start+o.count);for(let M=x,y=p-1;M<y;M+=h){let g=m.getX(M),P=m.getX(M+1),F=za(this,t,oo,u,g,P,M);F&&e.push(F)}if(this.isLineLoop){let M=m.getX(p-1),y=m.getX(x),g=za(this,t,oo,u,M,y,p-1);g&&e.push(g)}}else{let x=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let M=x,y=p-1;M<y;M+=h){let g=za(this,t,oo,u,M,M+1,M);g&&e.push(g)}if(this.isLineLoop){let M=za(this,t,oo,u,p-1,x,p-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function za(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(ul.fromBufferAttribute(a,s),fl.fromBufferAttribute(a,r),e.distanceSqToSegment(ul,fl,Hh,bp)>i)return;Hh.applyMatrix4(n.matrixWorld);let h=t.ray.origin.distanceTo(Hh);if(!(h<t.near||h>t.far))return{distance:h,point:bp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Sp=new Q,wp=new Q,Fs=class extends dl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Sp.fromBufferAttribute(e,s),wp.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Sp.distanceTo(wp);t.setAttribute("lineDistance",new Rn(i,1))}else ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Sr=class extends Ii{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ap=new $e,Zh=new br,Ba=new fs,ka=new Q,Mo=class extends In{constructor(t=new cn,e=new Sr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ba.copy(i.boundingSphere),Ba.applyMatrix4(s),Ba.radius+=r,t.ray.intersectsSphere(Ba)===!1)return;Ap.copy(s).invert(),Zh.copy(t.ray).applyMatrix4(Ap);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let p=d,M=x;p<M;p++){let y=h.getX(p);ka.fromBufferAttribute(f,y),Ep(ka,y,u,s,t,e,this)}}else{let d=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let p=d,M=x;p<M;p++)ka.fromBufferAttribute(f,p),Ep(ka,p,u,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ep(n,t,e,i,s,r,o){let a=Zh.distanceSqToPoint(n);if(a<e){let u=new Q;Zh.closestPointToPoint(n,u),u.applyMatrix4(i);let h=s.ray.origin.distanceTo(u);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:u,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var bo=class extends xn{constructor(t=[],e=_s,i,s,r,o,a,u,h,m){super(t,e,i,s,r,o,a,u,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Gn=class extends xn{constructor(t,e,i,s,r,o,a,u,h){super(t,e,i,s,r,o,a,u,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ps=class extends xn{constructor(t,e,i=fi,s,r,o,a=pn,u=pn,h,m=Ti,f=1){if(m!==Ti&&m!==Ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,s,r,o,a,u,m,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},pl=class extends ps{constructor(t,e=fi,i=_s,s,r,o=pn,a=pn,u,h=Ti){let m={width:t,height:t,depth:1},f=[m,m,m,m,m,m];super(t,t,e,i,s,r,o,a,u,h),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},So=class extends xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Je=class n extends cn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let u=[],h=[],m=[],f=[],d=0,x=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(u),this.setAttribute("position",new Rn(h,3)),this.setAttribute("normal",new Rn(m,3)),this.setAttribute("uv",new Rn(f,2));function p(M,y,g,P,F,E,C,w,D,b,R){let N=E/D,O=C/b,J=E/2,j=C/2,k=w/2,et=D+1,B=b+1,q=0,tt=0,Z=new Q;for(let it=0;it<B;it++){let rt=it*O-j;for(let St=0;St<et;St++){let Ct=St*N-J;Z[M]=Ct*P,Z[y]=rt*F,Z[g]=k,h.push(Z.x,Z.y,Z.z),Z[M]=0,Z[y]=0,Z[g]=w>0?1:-1,m.push(Z.x,Z.y,Z.z),f.push(St/D),f.push(1-it/b),q+=1}}for(let it=0;it<b;it++)for(let rt=0;rt<D;rt++){let St=d+rt+et*it,Ct=d+rt+et*(it+1),Gt=d+(rt+1)+et*(it+1),qt=d+(rt+1)+et*it;u.push(St,Ct,qt),u.push(Ct,Gt,qt),tt+=6}a.addGroup(x,tt,R),x+=tt,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Va=new Q,Ha=new Q,Gh=new Q,Ga=new Ai,wo=class extends cn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos($a*e),o=t.getIndex(),a=t.getAttribute("position"),u=o?o.count:a.count,h=[0,0,0],m=["a","b","c"],f=new Array(3),d={},x=[];for(let p=0;p<u;p+=3){o?(h[0]=o.getX(p),h[1]=o.getX(p+1),h[2]=o.getX(p+2)):(h[0]=p,h[1]=p+1,h[2]=p+2);let{a:M,b:y,c:g}=Ga;if(M.fromBufferAttribute(a,h[0]),y.fromBufferAttribute(a,h[1]),g.fromBufferAttribute(a,h[2]),Ga.getNormal(Gh),f[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,f[1]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,f[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let P=0;P<3;P++){let F=(P+1)%3,E=f[P],C=f[F],w=Ga[m[P]],D=Ga[m[F]],b=`${E}_${C}`,R=`${C}_${E}`;R in d&&d[R]?(Gh.dot(d[R].normal)<=r&&(x.push(w.x,w.y,w.z),x.push(D.x,D.y,D.z)),d[R]=null):b in d||(d[b]={index0:h[P],index1:h[F],normal:Gh.clone()})}}for(let p in d)if(d[p]){let{index0:M,index1:y}=d[p];Va.fromBufferAttribute(a,M),Ha.fromBufferAttribute(a,y),x.push(Va.x,Va.y,Va.z),x.push(Ha.x,Ha.y,Ha.z)}this.setAttribute("position",new Rn(x,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Ao=class n extends cn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),u=Math.floor(s),h=a+1,m=u+1,f=t/a,d=e/u,x=[],p=[],M=[],y=[];for(let g=0;g<m;g++){let P=g*d-o;for(let F=0;F<h;F++){let E=F*f-r;p.push(E,-P,0),M.push(0,0,1),y.push(F/a),y.push(1-g/u)}}for(let g=0;g<u;g++)for(let P=0;P<a;P++){let F=P+h*g,E=P+h*(g+1),C=P+1+h*(g+1),w=P+1+h*g;x.push(F,E,w),x.push(E,C,w)}this.setIndex(x),this.setAttribute("position",new Rn(p,3)),this.setAttribute("normal",new Rn(M,3)),this.setAttribute("uv",new Rn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function Bs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Tp(s))s.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Tp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Sn(n){let t={};for(let e=0;e<n.length;e++){let i=Bs(n[e]);for(let s in i)t[s]=i[s]}return t}function Tp(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ny(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Su(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}var gm={clone:Bs,merge:Sn},iy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends Ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iy,this.fragmentShader=sy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=ny(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ue().setHex(s.value);break;case"v2":this.uniforms[i].value=new be().fromArray(s.value);break;case"v3":this.uniforms[i].value=new Q().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ze().fromArray(s.value);break;case"m3":this.uniforms[i].value=new pe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new $e().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ml=class extends bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var gl=class extends Ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=em,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xl=class extends Ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function pr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Wh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ms=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let u=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===u)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},yl=class extends ms{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qh,endingEnd:qh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],u=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yh:r=t,a=2*e-i;break;case $h:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(u===void 0)switch(this.getSettings_().endingEnd){case Yh:o=t,u=2*i-e;break;case $h:o=1,u=i+s[1]-s[0];break;default:o=t-1,u=e}let h=(i-e)*.5,m=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(u-i),this._offsetPrev=r*m,this._offsetNext=o*m}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,u=t*a,h=u-a,m=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,x=this._weightNext,p=(i-e)/(s-e),M=p*p,y=M*p,g=-d*y+2*d*M-d*p,P=(1+d)*y+(-1.5-2*d)*M+(-.5+d)*p+1,F=(-1-x)*y+(1.5+x)*M+.5*p,E=x*y-x*M;for(let C=0;C!==a;++C)r[C]=g*o[m+C]+P*o[h+C]+F*o[u+C]+E*o[f+C];return r}},_l=class extends ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,u=t*a,h=u-a,m=(i-e)/(s-e),f=1-m;for(let d=0;d!==a;++d)r[d]=o[h+d]*f+o[u+d]*m;return r}},vl=class extends ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ml=class extends ms{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,u=t*a,h=u-a,m=this.inTangents,f=this.outTangents;if(!m||!f){let p=(i-e)/(s-e),M=1-p;for(let y=0;y!==a;++y)r[y]=o[h+y]*M+o[u+y]*p;return r}let d=a*2,x=t-1;for(let p=0;p!==a;++p){let M=o[h+p],y=o[u+p],g=x*d+p*2,P=f[g],F=f[g+1],E=t*d+p*2,C=m[E],w=m[E+1],D=oy(i,e,P,C,s);r[p]=xm(D,M,F,w,y)}return r}};function xm(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function ry(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function oy(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=xm(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let u=ry(r,t,e,i,s);if(Math.abs(u)<1e-10)break;r=Math.max(0,Math.min(1,r-a/u))}return r}var Wn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=pr(e,this.TimeBufferType),this.values=pr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:pr(t.times,Array),values:pr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Wh(t.settings)&&(i.settings={inTangents:pr(t.settings.inTangents,Array),outTangents:pr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new vl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ml(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ao:e=this.InterpolantFactoryMethodDiscrete;break;case sl:e=this.InterpolantFactoryMethodLinear;break;case qa:e=this.InterpolantFactoryMethodSmooth;break;case Xh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ae("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ao;case this.InterpolantFactoryMethodLinear:return sl;case this.InterpolantFactoryMethodSmooth:return qa;case this.InterpolantFactoryMethodBezier:return Xh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Wh(this.settings)&&(Cp(this.settings.inTangents,t),Cp(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(he("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(he("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let u=i[a];if(typeof u=="number"&&isNaN(u)){he("KeyframeTrack: Time is not a valid number.",this,a,u),t=!1;break}if(o!==null&&o>u){he("KeyframeTrack: Out of order keys.",this,a,u,o),t=!1;break}o=u}if(s!==void 0&&Fx(s))for(let a=0,u=s.length;a!==u;++a){let h=s[a];if(isNaN(h)){he("KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===qa,r=t.length-1,o=1;for(let a=1;a<r;++a){let u=!1,h=t[a],m=t[a+1];if(h!==m&&(a!==1||h!==t[0]))if(s)u=!0;else{let f=a*i,d=f-i,x=f+i;for(let p=0;p!==i;++p){let M=e[f+p];if(M!==e[d+p]||M!==e[x+p]){u=!0;break}}}if(u){if(a!==o){t[o]=t[a];let f=a*i,d=o*i;for(let x=0;x!==i;++x)e[d+x]=e[f+x]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,u=o*i,h=0;h!==i;++h)e[u+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Wh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Cp(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=sl;var gs=class extends Wn{constructor(t,e,i){super(t,e,i)}};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=ao;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends Wn{constructor(t,e,i,s){super(t,e,i,s)}};bl.prototype.ValueTypeName="color";var Sl=class extends Wn{constructor(t,e,i,s){super(t,e,i,s)}};Sl.prototype.ValueTypeName="number";var wl=class extends ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,u=(i-e)/(s-e),h=t*a;for(let m=h+a;h!==m;h+=4)Ri.slerpFlat(r,0,o,h-a,o,h,u);return r}},Eo=class extends Wn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new wl(this.times,this.values,this.getValueSize(),t)}};Eo.prototype.ValueTypeName="quaternion";Eo.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends Wn{constructor(t,e,i){super(t,e,i)}};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=ao;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends Wn{constructor(t,e,i,s){super(t,e,i,s)}};Al.prototype.ValueTypeName="vector";var El=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,u,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(m){a++,r===!1&&s.onStart!==void 0&&s.onStart(m,o,a),r=!0},this.itemEnd=function(m){o++,s.onProgress!==void 0&&s.onProgress(m,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return m=m.normalize("NFC"),u?u(m):m},this.setURLModifier=function(m){return u=m,this},this.addHandler=function(m,f){return h.push(m,f),this},this.removeHandler=function(m){let f=h.indexOf(m);return f!==-1&&h.splice(f,2),this},this.getHandler=function(m){for(let f=0,d=h.length;f<d;f+=2){let x=h[f],p=h[f+1];if(x.global&&(x.lastIndex=0),x.test(m))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ym=new El,Tl=class{constructor(t){this.manager=t!==void 0?t:ym,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Tl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wa=new Q,Xa=new Ri,Si=new Q,To=class extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Wa,Xa,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wa,Xa,Si.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Wa,Xa,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wa,Xa,Si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ls=new Q,Rp=new be,Ip=new be,vn=class extends To{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=rl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($a*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rl*2*Math.atan(Math.tan($a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,e){return this.getViewBounds(t,Rp,Ip),e.subVectors(Ip,Rp)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($a*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let u=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/u,e-=o.offsetY*i/h,s*=o.width/u,i*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Co=class extends To{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,u=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=m*this.view.offsetY,u=a-m*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var mr=-90,gr=1,Cl=class extends In{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vn(mr,gr,t,e);s.layers=this.layers,this.add(s);let r=new vn(mr,gr,t,e);r.layers=this.layers,this.add(r);let o=new vn(mr,gr,t,e);o.layers=this.layers,this.add(o);let a=new vn(mr,gr,t,e);a.layers=this.layers,this.add(a);let u=new vn(mr,gr,t,e);u.layers=this.layers,this.add(u);let h=new vn(mr,gr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,u]=e;for(let h of e)this.remove(h);if(t===hi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,u,h,m]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(i,4,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,m),t.setRenderTarget(f,d,x),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Rl=class extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var wu="\\[\\]\\.:\\/",ay=new RegExp("["+wu+"]","g"),Au="[^"+wu+"]",ly="[^"+wu.replace("\\.","")+"]",cy=/((?:WC+[\/:])*)/.source.replace("WC",Au),hy=/(WCOD+)?/.source.replace("WCOD",ly),uy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Au),fy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Au),dy=new RegExp("^"+cy+hy+uy+fy+"$"),py=["material","materials","bones","map"],Jh=class{constructor(t,e,i){let s=i||Xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Xe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ay,"")}static parseTrackName(t){let e=dy.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);py.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let u=i(a.children);if(u)return u}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){he("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){he("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){he("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let m=0;m<t.length;m++)if(t[m].name===h){h=m;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){he("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){he("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){he("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){he("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;he("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){he("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){he("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xe.Composite=Jh;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var o1=new Float32Array(1);var Pu=class Pu{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Pu.prototype.isMatrix2=!0;var Kh=Pu;function Eu(n,t,e,i){let s=my(i);switch(e){case xu:return n*t;case _u:return n*t/s.components*s.byteLength;case Ol:return n*t/s.components*s.byteLength;case bs:return n*t*2/s.components*s.byteLength;case zl:return n*t*2/s.components*s.byteLength;case yu:return n*t*3/s.components*s.byteLength;case ti:return n*t*4/s.components*s.byteLength;case Bl:return n*t*4/s.components*s.byteLength;case Lo:case Do:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case No:case Uo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vl:case Gl:return Math.max(n,16)*Math.max(t,8)/4;case kl:case Hl:return Math.max(n,8)*Math.max(t,8)/2;case Wl:case Xl:case Yl:case $l:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ql:case Fo:case Zl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Jl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Kl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case jl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case tc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ec:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case nc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ic:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case sc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case rc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case oc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ac:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case lc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case cc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case hc:case uc:case fc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case dc:case pc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Oo:case mc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function my(n){switch(n){case Xn:case du:return{byteLength:1,components:1};case Er:case pu:case pi:return{byteLength:2,components:1};case Ul:case Fl:return{byteLength:2,components:4};case fi:case Nl:case di:return{byteLength:4,components:1};case mu:case gu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function km(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function xy(n){let t=new WeakMap;function e(a,u){let h=a.array,m=a.usage,f=h.byteLength,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,h,m),a.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=n.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,u,h){let m=u.array,f=u.updateRanges;if(n.bindBuffer(h,a),f.length===0)n.bufferSubData(h,0,m);else{f.sort((x,p)=>x.start-p.start);let d=0;for(let x=1;x<f.length;x++){let p=f[d],M=f[x];M.start<=p.start+p.count+1?p.count=Math.max(p.count,M.start+M.count-p.start):(++d,f[d]=M)}f.length=d+1;for(let x=0,p=f.length;x<p;x++){let M=f[x];n.bufferSubData(h,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let u=t.get(a);u&&(n.deleteBuffer(u.buffer),t.delete(a))}function o(a,u){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let m=t.get(a);(!m||m.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,u));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,u),h.version=a.version}}return{get:s,remove:r,update:o}}var yy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_y=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,My=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,by=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ay=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ey=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ty=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ry=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Py=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ly=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Oy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,By=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ky=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Wy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$y="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ky=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,e_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,h_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,u_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,g_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,x_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,y_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,__=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,M_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,C_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,U_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,O_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,V_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,H_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,$_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ev=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ov=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,av=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_v=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Av=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ev=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ov=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$v=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ve={alphahash_fragment:yy,alphahash_pars_fragment:_y,alphamap_fragment:vy,alphamap_pars_fragment:My,alphatest_fragment:by,alphatest_pars_fragment:Sy,aomap_fragment:wy,aomap_pars_fragment:Ay,batching_pars_vertex:Ey,batching_vertex:Ty,begin_vertex:Cy,beginnormal_vertex:Ry,bsdfs:Iy,iridescence_fragment:Py,bumpmap_pars_fragment:Ly,clipping_planes_fragment:Dy,clipping_planes_pars_fragment:Ny,clipping_planes_pars_vertex:Uy,clipping_planes_vertex:Fy,color_fragment:Oy,color_pars_fragment:zy,color_pars_vertex:By,color_vertex:ky,common:Vy,cube_uv_reflection_fragment:Hy,defaultnormal_vertex:Gy,displacementmap_pars_vertex:Wy,displacementmap_vertex:Xy,emissivemap_fragment:qy,emissivemap_pars_fragment:Yy,colorspace_fragment:$y,colorspace_pars_fragment:Zy,envmap_fragment:Jy,envmap_common_pars_fragment:Ky,envmap_pars_fragment:jy,envmap_pars_vertex:Qy,envmap_physical_pars_fragment:h_,envmap_vertex:t_,fog_vertex:e_,fog_pars_vertex:n_,fog_fragment:i_,fog_pars_fragment:s_,gradientmap_pars_fragment:r_,lightmap_pars_fragment:o_,lights_lambert_fragment:a_,lights_lambert_pars_fragment:l_,lights_pars_begin:c_,lights_toon_fragment:u_,lights_toon_pars_fragment:f_,lights_phong_fragment:d_,lights_phong_pars_fragment:p_,lights_physical_fragment:m_,lights_physical_pars_fragment:g_,lights_fragment_begin:x_,lights_fragment_maps:y_,lights_fragment_end:__,lightprobes_pars_fragment:v_,logdepthbuf_fragment:M_,logdepthbuf_pars_fragment:b_,logdepthbuf_pars_vertex:S_,logdepthbuf_vertex:w_,map_fragment:A_,map_pars_fragment:E_,map_particle_fragment:T_,map_particle_pars_fragment:C_,metalnessmap_fragment:R_,metalnessmap_pars_fragment:I_,morphinstance_vertex:P_,morphcolor_vertex:L_,morphnormal_vertex:D_,morphtarget_pars_vertex:N_,morphtarget_vertex:U_,normal_fragment_begin:F_,normal_fragment_maps:O_,normal_pars_fragment:z_,normal_pars_vertex:B_,normal_vertex:k_,normalmap_pars_fragment:V_,clearcoat_normal_fragment_begin:H_,clearcoat_normal_fragment_maps:G_,clearcoat_pars_fragment:W_,iridescence_pars_fragment:X_,opaque_fragment:q_,packing:Y_,premultiplied_alpha_fragment:$_,project_vertex:Z_,dithering_fragment:J_,dithering_pars_fragment:K_,roughnessmap_fragment:j_,roughnessmap_pars_fragment:Q_,shadowmap_pars_fragment:tv,shadowmap_pars_vertex:ev,shadowmap_vertex:nv,shadowmask_pars_fragment:iv,skinbase_vertex:sv,skinning_pars_vertex:rv,skinning_vertex:ov,skinnormal_vertex:av,specularmap_fragment:lv,specularmap_pars_fragment:cv,tonemapping_fragment:hv,tonemapping_pars_fragment:uv,transmission_fragment:fv,transmission_pars_fragment:dv,uv_pars_fragment:pv,uv_pars_vertex:mv,uv_vertex:gv,worldpos_vertex:xv,background_vert:yv,background_frag:_v,backgroundCube_vert:vv,backgroundCube_frag:Mv,cube_vert:bv,cube_frag:Sv,depth_vert:wv,depth_frag:Av,distance_vert:Ev,distance_frag:Tv,equirect_vert:Cv,equirect_frag:Rv,linedashed_vert:Iv,linedashed_frag:Pv,meshbasic_vert:Lv,meshbasic_frag:Dv,meshlambert_vert:Nv,meshlambert_frag:Uv,meshmatcap_vert:Fv,meshmatcap_frag:Ov,meshnormal_vert:zv,meshnormal_frag:Bv,meshphong_vert:kv,meshphong_frag:Vv,meshphysical_vert:Hv,meshphysical_frag:Gv,meshtoon_vert:Wv,meshtoon_frag:Xv,points_vert:qv,points_frag:Yv,shadow_vert:$v,shadow_frag:Zv,sprite_vert:Jv,sprite_frag:Kv},kt={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Di={basic:{uniforms:Sn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Sn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ue(0)},envMapIntensity:{value:1}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Sn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Sn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Sn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new ue(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Sn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Sn([kt.points,kt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Sn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Sn([kt.common,kt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Sn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Sn([kt.sprite,kt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distance:{uniforms:Sn([kt.common,kt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distance_vert,fragmentShader:ve.distance_frag},shadow:{uniforms:Sn([kt.lights,kt.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Di.physical={uniforms:Sn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};var yc={r:0,b:0,g:0},jv=new $e,Vm=new pe;Vm.set(-1,0,0,0,1,0,0,0,1);function Qv(n,t,e,i,s,r){let o=new ue(0),a=s===!0?0:1,u,h,m=null,f=0,d=null;function x(P){let F=P.isScene===!0?P.background:null;if(F&&F.isTexture){let E=P.backgroundBlurriness>0;F=t.get(F,E)}return F}function p(P){let F=!1,E=x(P);E===null?y(o,a):E&&E.isColor&&(y(E,1),F=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||F)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(P,F){let E=x(F);E&&(E.isCubeTexture||E.mapping===Io)?(h===void 0&&(h=new Ne(new Je(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Bs(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=E,h.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jv.makeRotationFromEuler(F.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Vm),h.material.toneMapped=Ae.getTransfer(E.colorSpace)!==Ue,(m!==E||f!==E.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,m=E,f=E.version,d=n.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new Ne(new Ao(2,2),new bn({name:"BackgroundMaterial",uniforms:Bs(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,u.material.toneMapped=Ae.getTransfer(E.colorSpace)!==Ue,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(m!==E||f!==E.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,m=E,f=E.version,d=n.toneMapping),u.layers.enableAll(),P.unshift(u,u.geometry,u.material,0,0,null))}function y(P,F){P.getRGB(yc,Su(n)),e.buffers.color.setClear(yc.r,yc.g,yc.b,F,r)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(P,F=1){o.set(P),a=F,y(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(P){a=P,y(o,a)},render:p,addToRenderList:M,dispose:g}}function tM(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(O,J,j,k,et){let B=!1,q=f(O,k,j,J);r!==q&&(r=q,h(r.object)),B=x(O,k,j,et),B&&p(O,k,j,et),et!==null&&t.update(et,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,E(O,J,j,k),et!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function u(){return n.createVertexArray()}function h(O){return n.bindVertexArray(O)}function m(O){return n.deleteVertexArray(O)}function f(O,J,j,k){let et=k.wireframe===!0,B=i[J.id];B===void 0&&(B={},i[J.id]=B);let q=O.isInstancedMesh===!0?O.id:0,tt=B[q];tt===void 0&&(tt={},B[q]=tt);let Z=tt[j.id];Z===void 0&&(Z={},tt[j.id]=Z);let it=Z[et];return it===void 0&&(it=d(u()),Z[et]=it),it}function d(O){let J=[],j=[],k=[];for(let et=0;et<e;et++)J[et]=0,j[et]=0,k[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:j,attributeDivisors:k,object:O,attributes:{},index:null}}function x(O,J,j,k){let et=r.attributes,B=J.attributes,q=0,tt=j.getAttributes();for(let Z in tt)if(tt[Z].location>=0){let rt=et[Z],St=B[Z];if(St===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(St=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(St=O.instanceColor)),rt===void 0||rt.attribute!==St||St&&rt.data!==St.data)return!0;q++}return r.attributesNum!==q||r.index!==k}function p(O,J,j,k){let et={},B=J.attributes,q=0,tt=j.getAttributes();for(let Z in tt)if(tt[Z].location>=0){let rt=B[Z];rt===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(rt=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(rt=O.instanceColor));let St={};St.attribute=rt,rt&&rt.data&&(St.data=rt.data),et[Z]=St,q++}r.attributes=et,r.attributesNum=q,r.index=k}function M(){let O=r.newAttributes;for(let J=0,j=O.length;J<j;J++)O[J]=0}function y(O){g(O,0)}function g(O,J){let j=r.newAttributes,k=r.enabledAttributes,et=r.attributeDivisors;j[O]=1,k[O]===0&&(n.enableVertexAttribArray(O),k[O]=1),et[O]!==J&&(n.vertexAttribDivisor(O,J),et[O]=J)}function P(){let O=r.newAttributes,J=r.enabledAttributes;for(let j=0,k=J.length;j<k;j++)J[j]!==O[j]&&(n.disableVertexAttribArray(j),J[j]=0)}function F(O,J,j,k,et,B,q){q===!0?n.vertexAttribIPointer(O,J,j,et,B):n.vertexAttribPointer(O,J,j,k,et,B)}function E(O,J,j,k){M();let et=k.attributes,B=j.getAttributes(),q=J.defaultAttributeValues;for(let tt in B){let Z=B[tt];if(Z.location>=0){let it=et[tt];if(it===void 0&&(tt==="instanceMatrix"&&O.instanceMatrix&&(it=O.instanceMatrix),tt==="instanceColor"&&O.instanceColor&&(it=O.instanceColor)),it!==void 0){let rt=it.normalized,St=it.itemSize,Ct=t.get(it);if(Ct===void 0)continue;let Gt=Ct.buffer,qt=Ct.type,Ft=Ct.bytesPerElement,W=qt===n.INT||qt===n.UNSIGNED_INT||it.gpuType===Nl;if(it.isInterleavedBufferAttribute){let Y=it.data,ut=Y.stride,mt=it.offset;if(Y.isInstancedInterleavedBuffer){for(let _t=0;_t<Z.locationSize;_t++)g(Z.location+_t,Y.meshPerAttribute);O.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let _t=0;_t<Z.locationSize;_t++)y(Z.location+_t);n.bindBuffer(n.ARRAY_BUFFER,Gt);for(let _t=0;_t<Z.locationSize;_t++)F(Z.location+_t,St/Z.locationSize,qt,rt,ut*Ft,(mt+St/Z.locationSize*_t)*Ft,W)}else{if(it.isInstancedBufferAttribute){for(let Y=0;Y<Z.locationSize;Y++)g(Z.location+Y,it.meshPerAttribute);O.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Y=0;Y<Z.locationSize;Y++)y(Z.location+Y);n.bindBuffer(n.ARRAY_BUFFER,Gt);for(let Y=0;Y<Z.locationSize;Y++)F(Z.location+Y,St/Z.locationSize,qt,rt,St*Ft,St/Z.locationSize*Y*Ft,W)}}else if(q!==void 0){let rt=q[tt];if(rt!==void 0)switch(rt.length){case 2:n.vertexAttrib2fv(Z.location,rt);break;case 3:n.vertexAttrib3fv(Z.location,rt);break;case 4:n.vertexAttrib4fv(Z.location,rt);break;default:n.vertexAttrib1fv(Z.location,rt)}}}}P()}function C(){R();for(let O in i){let J=i[O];for(let j in J){let k=J[j];for(let et in k){let B=k[et];for(let q in B)m(B[q].object),delete B[q];delete k[et]}}delete i[O]}}function w(O){if(i[O.id]===void 0)return;let J=i[O.id];for(let j in J){let k=J[j];for(let et in k){let B=k[et];for(let q in B)m(B[q].object),delete B[q];delete k[et]}}delete i[O.id]}function D(O){for(let J in i){let j=i[J];for(let k in j){let et=j[k];if(et[O.id]===void 0)continue;let B=et[O.id];for(let q in B)m(B[q].object),delete B[q];delete et[O.id]}}}function b(O){for(let J in i){let j=i[J],k=O.isInstancedMesh===!0?O.id:0,et=j[k];if(et!==void 0){for(let B in et){let q=et[B];for(let tt in q)m(q[tt].object),delete q[tt];delete et[B]}delete j[k],Object.keys(j).length===0&&delete i[J]}}}function R(){N(),o=!0,r!==s&&(r=s,h(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:y,disableUnusedAttributes:P}}function eM(n,t,e){let i;function s(u){i=u}function r(u,h){n.drawArrays(i,u,h),e.update(h,i,1)}function o(u,h,m){m!==0&&(n.drawArraysInstanced(i,u,h,m),e.update(h,i,m))}function a(u,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,m);let d=0;for(let x=0;x<m;x++)d+=h[x];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function nM(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==ti&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let b=D===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Xn&&D!==di&&!b&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function u(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",m=u(h);m!==h&&(ae("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);let f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),P=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),F=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:x,maxVertexTextures:p,maxTextureSize:M,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:P,maxVaryings:F,maxFragmentUniforms:E,maxSamples:C,samples:w}}function iM(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ci,a=new pe,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let x=f.length!==0||d||i!==0||s;return s=d,i=f.length,x},this.beginShadows=function(){r=!0,m(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=m(f,d,0)},this.setState=function(f,d,x){let p=f.clippingPlanes,M=f.clipIntersection,y=f.clipShadows,g=n.get(f);if(!s||p===null||p.length===0||r&&!y)r?m(null):h();else{let P=r?0:i,F=P*4,E=g.clippingState||null;u.value=E,E=m(p,d,F,x);for(let C=0;C!==F;++C)E[C]=e[C];g.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=P}};function h(){u.value!==e&&(u.value=e,u.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function m(f,d,x,p){let M=f!==null?f.length:0,y=null;if(M!==0){if(y=u.value,p!==!0||y===null){let g=x+M*4,P=d.matrixWorldInverse;a.getNormalMatrix(P),(y===null||y.length<g)&&(y=new Float32Array(g));for(let F=0,E=x;F!==M;++F,E+=4)o.copy(f[F]).applyMatrix4(P,a),o.normal.toArray(y,E),y[E+3]=o.constant}u.value=y,u.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,y}}var Rr=4,sM=6,rM=20,oM=256,zo=new Co,_m=new ue,Lu=null,Du=0,Nu=0,Uu=!1,aM=new Q,ks=new Q,vc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=aM}=r;Lu=this._renderer.getRenderTarget(),Du=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,i,s,u,a),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Lu,Du,Nu),this._renderer.xr.enabled=Uu,t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lu=this._renderer.getRenderTarget(),Du=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:pi,format:ti,colorSpace:lo,depthBuffer:!1},s=vm(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vm(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lM(r)),this._blurMaterial=hM(r,t,e),this._ggxMaterial=cM(r,t,e)}return s}_compileMaterial(t){let e=new Ne(new cn,t);this._renderer.compile(e,zo)}_sceneToCubeUV(t,e,i,s,r){let u=new vn(90,1,e,i),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,x=f.toneMapping;f.getClearColor(_m),f.toneMapping=ui,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ne(new Je,new Mn({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,y=M.material,g=!1,P=t.background;P?P.isColor&&(y.color.copy(P),t.background=null,g=!0):(y.color.copy(_m),g=!0);for(let F=0;F<6;F++){let E=F%3;E===0?(u.up.set(0,h[F],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x+m[F],r.y,r.z)):E===1?(u.up.set(0,0,h[F]),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y+m[F],r.z)):(u.up.set(0,h[F],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y,r.z+m[F]));let C=this._cubeSize;Cr(s,E*C,F>2?C:0,C,C),f.setRenderTarget(s),g&&f.render(M,u),f.render(t,u)}f.toneMapping=x,f.autoClear=d,t.background=P}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===_s||t.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let u=this._cubeSize;Cr(e,0,0,3*u,2*u),i.setRenderTarget(e),i.render(o,zo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let u=o.uniforms,h=i/(this._lodMeshes.length-1),m=e/(this._lodMeshes.length-1),f=Math.sqrt(h*h-m*m),d=h*1.25,x=f*d,{_lodMax:p}=this,M=this._sizeLods[i],y=3*M*(i>p-Rr?i-p+Rr:0),g=4*(this._cubeSize-M);u.envMap.value=t.texture,u.roughness.value=x,u.mipInt.value=p-e,Cr(r,y,g,3*M,2*M),s.setRenderTarget(r),s.render(a,zo),u.envMap.value=r.texture,u.roughness.value=0,u.mipInt.value=p-i,Cr(t,y,g,3*M,2*M),s.setRenderTarget(t),s.render(a,zo)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,u=this._lodMeshes[s];u.material=a;let h=a.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-i;let m=this._sizeLods[s],f=3*m*(s>this._lodMax-Rr?s-this._lodMax+Rr:0),d=4*(this._cubeSize-m);Cr(e,f,d,3*m,2*m),o.setRenderTarget(e),o.render(u,zo)}};function lM(n){let t=[],e=[],i=n,s=n-Rr+1+sM;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),u=-a,h=1+a,m=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,d=6,x=3,p=new Float32Array(x*d*f),M=new Float32Array(x*d*f);for(let g=0;g<f;g++){let P=g%3*2/3-1,F=g>2?0:-1,E=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];p.set(E,x*d*g);for(let C=0;C<d;C++){let w=m[C*2]*2-1,D=m[C*2+1]*2-1;g===0?ks.set(1,D,w):g===1?ks.set(-w,1,-D):g===2?ks.set(-w,D,1):g===3?ks.set(-1,D,-w):g===4?ks.set(-w,-1,D):ks.set(w,D,-1),ks.toArray(M,(g*d+C)*x)}}let y=new cn;y.setAttribute("position",new je(p,x)),y.setAttribute("outputDirection",new je(M,x)),e.push(new Ne(y,null)),i>Rr&&i--}return{lodMeshes:e,sizeLods:t}}function vm(n,t,e){let i=new Dn(n,t,e);return i.texture.mapping=Io,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function cM(n,t,e){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:oM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function hM(n,t,e){return new bn({name:"SphericalGaussianBlur",defines:{SAMPLES:rM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Sc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Mm(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function bm(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Sc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Mc=class extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new bo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Je(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:Pi});r.uniforms.tEquirect.value=e;let o=new Ne(s,r),a=e.minFilter;return e.minFilter===vs&&(e.minFilter=an),new Cl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function uM(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,x=!1){return d==null?null:x?o(d):r(d)}function r(d){if(d&&d.isTexture){let x=d.mapping;if(x===Pl||x===Ll)if(t.has(d)){let p=t.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let M=new Mc(p.height);return M.fromEquirectangularTexture(n,d),t.set(d,M),d.addEventListener("dispose",h),a(M.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let x=d.mapping,p=x===Pl||x===Ll,M=x===_s||x===zs;if(p||M){let y=e.get(d),g=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new vc(n)),y=p?i.fromEquirectangular(d,y):i.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{let P=d.image;return p&&P&&P.height>0||M&&P&&u(P)?(i===null&&(i=new vc(n)),y=p?i.fromEquirectangular(d):i.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",m),y.texture):null}}}return d}function a(d,x){return x===Pl?d.mapping=_s:x===Ll&&(d.mapping=zs),d}function u(d){let x=0,p=6;for(let M=0;M<p;M++)d[M]!==void 0&&x++;return x===p}function h(d){let x=d.target;x.removeEventListener("dispose",h);let p=t.get(x);p!==void 0&&(t.delete(x),p.dispose())}function m(d){let x=d.target;x.removeEventListener("dispose",m);let p=e.get(x);p!==void 0&&(e.delete(x),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function fM(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ns("WebGLRenderer: "+i+" extension not supported."),s}}}function dM(n,t,e,i){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let x=r.get(d);x&&(t.remove(x),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function u(f){let d=f.attributes;for(let x in d)t.update(d[x],n.ARRAY_BUFFER)}function h(f){let d=[],x=f.index,p=f.attributes.position,M=0;if(p===void 0)return;if(x!==null){let P=x.array;M=x.version;for(let F=0,E=P.length;F<E;F+=3){let C=P[F+0],w=P[F+1],D=P[F+2];d.push(C,w,w,D,D,C)}}else{let P=p.array;M=p.version;for(let F=0,E=P.length/3-1;F<E;F+=3){let C=F+0,w=F+1,D=F+2;d.push(C,w,w,D,D,C)}}let y=new(p.count>=65535?yo:xo)(d,1);y.version=M;let g=r.get(f);g&&t.remove(g),r.set(f,y)}function m(f){let d=r.get(f);if(d){let x=f.index;x!==null&&d.version<x.version&&h(f)}else h(f);return r.get(f)}return{get:a,update:u,getWireframeAttribute:m}}function pM(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function u(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function h(f,d,x){x!==0&&(n.drawElementsInstanced(i,d,r,f*o,x),e.update(d,i,x))}function m(f,d,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,x);let M=0;for(let y=0;y<x;y++)M+=d[y];e.update(M,i,1)}this.setMode=s,this.setIndex=a,this.render=u,this.renderInstances=h,this.renderMultiDraw=m}function mM(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:he("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function gM(n,t,e){let i=new WeakMap,s=new Ze;function r(o,a,u){let h=o.morphTargetInfluences,m=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=m!==void 0?m.length:0,d=i.get(a);if(d===void 0||d.count!==f){let R=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();let x=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],P=a.morphAttributes.color||[],F=0;x===!0&&(F=1),p===!0&&(F=2),M===!0&&(F=3);let E=a.attributes.position.count*F,C=1;E>t.maxTextureSize&&(C=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let w=new Float32Array(E*C*4*f),D=new po(w,E,C,f);D.type=di,D.needsUpdate=!0;let b=F*4;for(let N=0;N<f;N++){let O=y[N],J=g[N],j=P[N],k=E*C*4*N;for(let et=0;et<O.count;et++){let B=et*b;x===!0&&(s.fromBufferAttribute(O,et),w[k+B+0]=s.x,w[k+B+1]=s.y,w[k+B+2]=s.z,w[k+B+3]=0),p===!0&&(s.fromBufferAttribute(J,et),w[k+B+4]=s.x,w[k+B+5]=s.y,w[k+B+6]=s.z,w[k+B+7]=0),M===!0&&(s.fromBufferAttribute(j,et),w[k+B+8]=s.x,w[k+B+9]=s.y,w[k+B+10]=s.z,w[k+B+11]=j.itemSize===4?s.w:1)}}d={count:f,texture:D,size:new be(E,C)},i.set(a,d),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let x=0;for(let M=0;M<h.length;M++)x+=h[M];let p=a.morphTargetsRelative?1:1-x;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",h)}u.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function xM(n,t,e,i,s){let r=new WeakMap;function o(h){let m=s.render.frame,f=h.geometry,d=t.get(h,f);if(r.get(d)!==m&&(t.update(d),r.set(d,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),r.get(h)!==m&&(e.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,n.ARRAY_BUFFER),r.set(h,m))),h.isSkinnedMesh){let x=h.skeleton;r.get(x)!==m&&(x.update(),r.set(x,m))}return d}function a(){r=new WeakMap}function u(h){let m=h.target;m.removeEventListener("dispose",u),i.releaseStatesOfObject(m),e.remove(m.instanceMatrix),m.instanceColor!==null&&e.remove(m.instanceColor)}return{update:o,dispose:a}}var yM={[ru]:"LINEAR_TONE_MAPPING",[ou]:"REINHARD_TONE_MAPPING",[au]:"CINEON_TONE_MAPPING",[lu]:"ACES_FILMIC_TONE_MAPPING",[hu]:"AGX_TONE_MAPPING",[uu]:"NEUTRAL_TONE_MAPPING",[cu]:"CUSTOM_TONE_MAPPING"};function _M(n,t,e,i,s,r){let o=new Dn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,u=null,h=new cn;h.setAttribute("position",new Rn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Rn([0,2,0,0,2,0],2));let m=new ml({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Ne(h,m),d=new Co(-1,1,1,-1,0,1),x=null,p=null,M=!1,y,g=null,P=[],F=!1;this.setSize=function(E,C){o.setSize(E,C),a!==null&&a.setSize(E,C),u!==null&&u.setSize(E,C);for(let w=0;w<P.length;w++){let D=P[w];D.setSize&&D.setSize(E,C)}},this.setEffects=function(E){P=E,F=P.length>0&&P[0].isRenderPass===!0;let C=o.width,w=o.height;P.length>0&&a===null&&(a=new Dn(C,w,{type:pi,depthBuffer:!1,stencilBuffer:!1}),u=new Dn(C,w,{type:pi,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<P.length;D++){let b=P[D];b.setSize&&b.setSize(C,w)}},this.begin=function(E,C){if(M||E.toneMapping===ui&&P.length===0)return!1;if(g=C,C!==null){let w=C.width,D=C.height;(o.width!==w||o.height!==D)&&this.setSize(w,D)}return F===!1&&E.setRenderTarget(o),y=E.toneMapping,E.toneMapping=ui,!0},this.hasRenderPass=function(){return F},this.end=function(E,C){E.toneMapping=y,M=!0;let w=o,D=a;for(let b=0;b<P.length;b++){let R=P[b];R.enabled!==!1&&(R.render(E,D,w,C),R.needsSwap!==!1&&(w=D,D=D===a?u:a))}if(x!==E.outputColorSpace||p!==E.toneMapping){x=E.outputColorSpace,p=E.toneMapping,m.defines={},Ae.getTransfer(x)===Ue&&(m.defines.SRGB_TRANSFER="");let b=yM[p];b&&(m.defines[b]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=w.texture,E.setRenderTarget(g),E.render(f,d),g=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),u!==null&&u.dispose(),h.dispose(),m.dispose()}}var Hm=new xn,zu=new ps(1,1),Gm=new po,Wm=new ll,Xm=new bo,Sm=[],wm=[],Am=new Float32Array(16),Em=new Float32Array(9),Tm=new Float32Array(4);function Pr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Sm[s];if(r===void 0&&(r=new Float32Array(s),Sm[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function hn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function un(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function wc(n,t){let e=wm[t];e===void 0&&(e=new Int32Array(t),wm[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function vM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function MM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;n.uniform2fv(this.addr,t),un(e,t)}}function bM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(hn(e,t))return;n.uniform3fv(this.addr,t),un(e,t)}}function SM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;n.uniform4fv(this.addr,t),un(e,t)}}function wM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(hn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),un(e,t)}else{if(hn(e,i))return;Tm.set(i),n.uniformMatrix2fv(this.addr,!1,Tm),un(e,i)}}function AM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(hn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),un(e,t)}else{if(hn(e,i))return;Em.set(i),n.uniformMatrix3fv(this.addr,!1,Em),un(e,i)}}function EM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(hn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),un(e,t)}else{if(hn(e,i))return;Am.set(i),n.uniformMatrix4fv(this.addr,!1,Am),un(e,i)}}function TM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function CM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;n.uniform2iv(this.addr,t),un(e,t)}}function RM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;n.uniform3iv(this.addr,t),un(e,t)}}function IM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;n.uniform4iv(this.addr,t),un(e,t)}}function PM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function LM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;n.uniform2uiv(this.addr,t),un(e,t)}}function DM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;n.uniform3uiv(this.addr,t),un(e,t)}}function NM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;n.uniform4uiv(this.addr,t),un(e,t)}}function UM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(zu.compareFunction=e.isReversedDepthBuffer()?xc:gc,r=zu):r=Hm,e.setTexture2D(t||r,s)}function FM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Wm,s)}function OM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Xm,s)}function zM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Gm,s)}function BM(n){switch(n){case 5126:return vM;case 35664:return MM;case 35665:return bM;case 35666:return SM;case 35674:return wM;case 35675:return AM;case 35676:return EM;case 5124:case 35670:return TM;case 35667:case 35671:return CM;case 35668:case 35672:return RM;case 35669:case 35673:return IM;case 5125:return PM;case 36294:return LM;case 36295:return DM;case 36296:return NM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return OM;case 36289:case 36303:case 36311:case 36292:return zM}}function kM(n,t){n.uniform1fv(this.addr,t)}function VM(n,t){let e=Pr(t,this.size,2);n.uniform2fv(this.addr,e)}function HM(n,t){let e=Pr(t,this.size,3);n.uniform3fv(this.addr,e)}function GM(n,t){let e=Pr(t,this.size,4);n.uniform4fv(this.addr,e)}function WM(n,t){let e=Pr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function XM(n,t){let e=Pr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function qM(n,t){let e=Pr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function YM(n,t){n.uniform1iv(this.addr,t)}function $M(n,t){n.uniform2iv(this.addr,t)}function ZM(n,t){n.uniform3iv(this.addr,t)}function JM(n,t){n.uniform4iv(this.addr,t)}function KM(n,t){n.uniform1uiv(this.addr,t)}function jM(n,t){n.uniform2uiv(this.addr,t)}function QM(n,t){n.uniform3uiv(this.addr,t)}function tb(n,t){n.uniform4uiv(this.addr,t)}function eb(n,t,e){let i=this.cache,s=t.length,r=wc(e,s);hn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=zu:o=Hm;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function nb(n,t,e){let i=this.cache,s=t.length,r=wc(e,s);hn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Wm,r[o])}function ib(n,t,e){let i=this.cache,s=t.length,r=wc(e,s);hn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Xm,r[o])}function sb(n,t,e){let i=this.cache,s=t.length,r=wc(e,s);hn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Gm,r[o])}function rb(n){switch(n){case 5126:return kM;case 35664:return VM;case 35665:return HM;case 35666:return GM;case 35674:return WM;case 35675:return XM;case 35676:return qM;case 5124:case 35670:return YM;case 35667:case 35671:return $M;case 35668:case 35672:return ZM;case 35669:case 35673:return JM;case 5125:return KM;case 36294:return jM;case 36295:return QM;case 36296:return tb;case 35678:case 36198:case 36298:case 36306:case 35682:return eb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return sb}}var Bu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=BM(e.type)}},ku=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rb(e.type)}},Vu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Fu=/(\w+)(\])?(\[|\.)?/g;function Cm(n,t){n.seq.push(t),n.map[t.id]=t}function ob(n,t,e){let i=n.name,s=i.length;for(Fu.lastIndex=0;;){let r=Fu.exec(i),o=Fu.lastIndex,a=r[1],u=r[2]==="]",h=r[3];if(u&&(a=a|0),h===void 0||h==="["&&o+2===s){Cm(e,h===void 0?new Bu(a,n,t):new ku(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new Vu(a),Cm(e,f)),e=f}}}var Ir=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),u=t.getUniformLocation(e,a.name);ob(a,u,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],u=i[a.id];u.needsUpdate!==!1&&a.setValue(t,u.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Rm(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var ab=37297,lb=0;function cb(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Im=new pe;function hb(n){Ae._getMatrix(Im,Ae.workingColorSpace,n);let t=`mat3( ${Im.elements.map(e=>e.toFixed(4))} )`;switch(Ae.getTransfer(n)){case co:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Pm(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+cb(n.getShaderSource(t),a)}else return r}function ub(n,t){let e=hb(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var fb={[ru]:"Linear",[ou]:"Reinhard",[au]:"Cineon",[lu]:"ACESFilmic",[hu]:"AgX",[uu]:"Neutral",[cu]:"Custom"};function db(n,t){let e=fb[t];return e===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _c=new Q;function pb(){Ae.getLuminanceCoefficients(_c);let n=_c.x.toFixed(4),t=_c.y.toFixed(4),e=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function gb(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function xb(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ko(n){return n!==""}function Lm(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dm(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var yb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hu(n){return n.replace(yb,vb)}var _b=new Map;function vb(n,t){let e=ve[t];if(e===void 0){let i=_b.get(t);if(i!==void 0)e=ve[i],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Hu(e)}var Mb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(n){return n.replace(Mb,bb)}function bb(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Um(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Sb={[Ro]:"SHADOWMAP_TYPE_PCF",[wr]:"SHADOWMAP_TYPE_VSM"};function wb(n){return Sb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ab={[_s]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE",[Io]:"ENVMAP_TYPE_CUBE_UV"};function Eb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Ab[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Tb={[zs]:"ENVMAP_MODE_REFRACTION"};function Cb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Tb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Rb={[su]:"ENVMAP_BLENDING_MULTIPLY",[jp]:"ENVMAP_BLENDING_MIX",[Qp]:"ENVMAP_BLENDING_ADD"};function Ib(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Rb[n.combine]||"ENVMAP_BLENDING_NONE"}function Pb(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Lb(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,u=wb(e),h=Eb(e),m=Cb(e),f=Ib(e),d=Pb(e),x=mb(e),p=gb(r),M=s.createProgram(),y,g,P=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ko).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ko).join(`
`),g.length>0&&(g+=`
`)):(y=[Um(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),g=[Um(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?ve.tonemapping_pars_fragment:"",e.toneMapping!==ui?db("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,ub("linearToOutputTexel",e.outputColorSpace),pb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ko).join(`
`)),o=Hu(o),o=Lm(o,e),o=Dm(o,e),a=Hu(a),a=Lm(a,e),a=Dm(a,e),o=Nm(o),a=Nm(a),e.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",e.glslVersion===bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let F=P+y+o,E=P+g+a,C=Rm(s,s.VERTEX_SHADER,F),w=Rm(s,s.FRAGMENT_SHADER,E);s.attachShader(M,C),s.attachShader(M,w),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function D(O){if(n.debug.checkShaderErrors){let J=s.getProgramInfoLog(M)||"",j=s.getShaderInfoLog(C)||"",k=s.getShaderInfoLog(w)||"",et=J.trim(),B=j.trim(),q=k.trim(),tt=!0,Z=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(tt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,C,w);else{let it=Pm(s,C,"vertex"),rt=Pm(s,w,"fragment");he("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+et+`
`+it+`
`+rt)}else et!==""?ae("WebGLProgram: Program Info Log:",et):(B===""||q==="")&&(Z=!1);Z&&(O.diagnostics={runnable:tt,programLog:et,vertexShader:{log:B,prefix:y},fragmentShader:{log:q,prefix:g}})}s.deleteShader(C),s.deleteShader(w),b=new Ir(s,M),R=xb(s,M)}let b;this.getUniforms=function(){return b===void 0&&D(this),b};let R;this.getAttributes=function(){return R===void 0&&D(this),R};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(M,ab)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lb++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=w,this}var Db=0,Gu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Wu(t),e.set(t,i)),i}},Wu=class{constructor(t){this.id=Db++,this.code=t,this.usedTimes=0}};function Nb(n){return n===bs||n===Fo||n===Oo}function Ub(n,t,e,i,s,r){let o=new mo,a=new Gu,u=new Set,h=[],m=new Map,f=i.logarithmicDepthBuffer,d=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b){return u.add(b),b===0?"uv":`uv${b}`}function M(b,R,N,O,J,j){let k=O.fog,et=J.geometry,B=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,q=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,tt=t.get(b.envMap||B,q),Z=tt&&tt.mapping===Io?tt.image.height:null,it=x[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&ae("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let rt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,St=rt!==void 0?rt.length:0,Ct=0;et.morphAttributes.position!==void 0&&(Ct=1),et.morphAttributes.normal!==void 0&&(Ct=2),et.morphAttributes.color!==void 0&&(Ct=3);let Gt,qt,Ft,W;if(it){let ze=Di[it];Gt=ze.vertexShader,qt=ze.fragmentShader}else{Gt=b.vertexShader,qt=b.fragmentShader;let ze=a.getVertexShaderStage(b),Se=a.getFragmentShaderStage(b);a.update(b,ze,Se),Ft=ze.id,W=Se.id}let Y=n.getRenderTarget(),ut=n.state.buffers.depth.getReversed(),mt=J.isInstancedMesh===!0,_t=J.isBatchedMesh===!0,Pt=!!b.map,le=!!b.matcap,Dt=!!tt,ct=!!b.aoMap,Qt=!!b.lightMap,Nt=!!b.bumpMap&&b.wireframe===!1,re=!!b.normalMap,ge=!!b.displacementMap,_e=!!b.emissiveMap,oe=!!b.metalnessMap,Oe=!!b.roughnessMap,H=b.anisotropy>0,He=b.clearcoat>0,Me=b.dispersion>0,U=b.retroreflectivity>0,v=b.iridescence>0,$=b.sheen>0,ot=b.transmission>0,ht=H&&!!b.anisotropyMap,At=He&&!!b.clearcoatMap,Lt=He&&!!b.clearcoatNormalMap,ft=He&&!!b.clearcoatRoughnessMap,pt=v&&!!b.iridescenceMap,It=v&&!!b.iridescenceThicknessMap,Yt=$&&!!b.sheenColorMap,Ot=$&&!!b.sheenRoughnessMap,Ut=!!b.specularMap,te=!!b.specularColorMap,se=!!b.specularIntensityMap,fe=ot&&!!b.transmissionMap,G=ot&&!!b.thicknessMap,wt=!!b.gradientMap,dt=!!b.alphaMap,Et=b.alphaTest>0,Rt=!!b.alphaHash,xt=!!b.extensions,ee=ui;b.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ee=n.toneMapping);let $t={shaderID:it,shaderType:b.type,shaderName:b.name,vertexShader:Gt,fragmentShader:qt,defines:b.defines,customVertexShaderID:Ft,customFragmentShaderID:W,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:_t,batchingColor:_t&&J._colorsTexture!==null,instancing:mt,instancingColor:mt&&J.instanceColor!==null,instancingMorph:mt&&J.morphTexture!==null,outputColorSpace:Y===null?n.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ae.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Pt,matcap:le,envMap:Dt,envMapMode:Dt&&tt.mapping,envMapCubeUVHeight:Z,aoMap:ct,lightMap:Qt,bumpMap:Nt,normalMap:re,displacementMap:ge,emissiveMap:_e,normalMapObjectSpace:re&&b.normalMapType===nm,normalMapTangentSpace:re&&b.normalMapType===vu,packedNormalMap:re&&b.normalMapType===vu&&Nb(b.normalMap.format),metalnessMap:oe,roughnessMap:Oe,anisotropy:H,anisotropyMap:ht,clearcoat:He,clearcoatMap:At,clearcoatNormalMap:Lt,clearcoatRoughnessMap:ft,dispersion:Me,retroreflection:U,iridescence:v,iridescenceMap:pt,iridescenceThicknessMap:It,sheen:$,sheenColorMap:Yt,sheenRoughnessMap:Ot,specularMap:Ut,specularColorMap:te,specularIntensityMap:se,transmission:ot,transmissionMap:fe,thicknessMap:G,gradientMap:wt,opaque:b.transparent===!1&&b.blending===Ar&&b.alphaToCoverage===!1,alphaMap:dt,alphaTest:Et,alphaHash:Rt,combine:b.combine,mapUv:Pt&&p(b.map.channel),aoMapUv:ct&&p(b.aoMap.channel),lightMapUv:Qt&&p(b.lightMap.channel),bumpMapUv:Nt&&p(b.bumpMap.channel),normalMapUv:re&&p(b.normalMap.channel),displacementMapUv:ge&&p(b.displacementMap.channel),emissiveMapUv:_e&&p(b.emissiveMap.channel),metalnessMapUv:oe&&p(b.metalnessMap.channel),roughnessMapUv:Oe&&p(b.roughnessMap.channel),anisotropyMapUv:ht&&p(b.anisotropyMap.channel),clearcoatMapUv:At&&p(b.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&p(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&p(b.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&p(b.iridescenceMap.channel),iridescenceThicknessMapUv:It&&p(b.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&p(b.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&p(b.sheenRoughnessMap.channel),specularMapUv:Ut&&p(b.specularMap.channel),specularColorMapUv:te&&p(b.specularColorMap.channel),specularIntensityMapUv:se&&p(b.specularIntensityMap.channel),transmissionMapUv:fe&&p(b.transmissionMap.channel),thicknessMapUv:G&&p(b.thicknessMap.channel),alphaMapUv:dt&&p(b.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(re||H),vertexNormals:!!et.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!et.attributes.uv&&(Pt||dt),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||et.attributes.normal===void 0&&re===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ut,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:et.attributes.position!==void 0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Ct,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:ee,decodeVideoTexture:Pt&&b.map.isVideoTexture===!0&&Ae.getTransfer(b.map.colorSpace)===Ue,decodeVideoTextureEmissive:_e&&b.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(b.emissiveMap.colorSpace)===Ue,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Qn,flipSided:b.side===Pn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:xt&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&b.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return $t.vertexUv1s=u.has(1),$t.vertexUv2s=u.has(2),$t.vertexUv3s=u.has(3),u.clear(),$t}function y(b){let R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(let N in b.defines)R.push(N),R.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(g(R,b),P(R,b),R.push(n.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function g(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numSunLights),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numSunLightShadows),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function P(b,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function F(b){let R=x[b.type],N;if(R){let O=Di[R];N=gm.clone(O.uniforms)}else N=b.uniforms;return N}function E(b,R){let N=m.get(R);return N!==void 0?++N.usedTimes:(N=new Lb(n,R,b,s),h.push(N),m.set(R,N)),N}function C(b){if(--b.usedTimes===0){let R=h.indexOf(b);h[R]=h[h.length-1],h.pop(),m.delete(b.cacheKey),b.destroy()}}function w(b){a.remove(b)}function D(){a.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:F,acquireProgram:E,releaseProgram:C,releaseShaderCache:w,programs:h,dispose:D}}function Fb(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,u){n.get(o)[a]=u}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Ob(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Fm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Om(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d){let x=0;return d.isInstancedMesh&&(x+=2),d.isSkinnedMesh&&(x+=1),x}function a(d,x,p,M,y,g){let P=n[t];return P===void 0?(P={id:d.id,object:d,geometry:x,material:p,materialVariant:o(d),groupOrder:M,renderOrder:d.renderOrder,z:y,group:g},n[t]=P):(P.id=d.id,P.object=d,P.geometry=x,P.material=p,P.materialVariant=o(d),P.groupOrder=M,P.renderOrder=d.renderOrder,P.z=y,P.group=g),t++,P}function u(d,x,p,M,y,g,P){P.reversedDepth===!0&&(y=-y);let F=a(d,x,p,M,y,g);p.transmission>0?i.push(F):p.transparent===!0?s.push(F):e.push(F)}function h(d,x,p,M,y,g){let P=a(d,x,p,M,y,g);p.transmission>0?i.unshift(P):p.transparent===!0?s.unshift(P):e.unshift(P)}function m(d,x){e.length>1&&e.sort(d||Ob),i.length>1&&i.sort(x||Fm),s.length>1&&s.sort(x||Fm)}function f(){for(let d=t,x=n.length;d<x;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:u,unshift:h,finish:f,sort:m}}function zb(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Om,n.set(i,[o])):s>=r.length?(o=new Om,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Bb(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Q,color:new ue};break;case"SpotLight":e={position:new Q,direction:new Q,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Q,color:new ue,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Q,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":e={color:new ue,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return n[t.id]=e,e}}}function kb(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Vb=0;function Hb(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Gb(n){let t=new Bb,e=kb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new Q);let s=new Q,r=new $e,o=new $e;function a(h){let m=0,f=0,d=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let x=0,p=0,M=0,y=0,g=0,P=0,F=0,E=0,C=0,w=0,D=0,b=0,R=0,N=0;h.sort(Hb);for(let J=0,j=h.length;J<j;J++){let k=h[J],et=k.color,B=k.intensity,q=k.distance,tt=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===bs?tt=k.shadow.map.texture:tt=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)m+=et.r*B,f+=et.g*B,d+=et.b*B;else if(k.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(k.sh.coefficients[Z],B);N++}else if(k.isSunLight){let Z=t.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let it=k.shadow,rt=e.get(k);rt.shadowIntensity=it.intensity,rt.shadowBias=it.bias,rt.shadowNormalBias=it.normalBias,rt.shadowRadius=it.radius,rt.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),i.sunShadow[p]=rt,i.sunShadowMap[p]=tt;let St=it.getViewportCount();for(let Ct=0;Ct<St;Ct++)i.sunShadowMatrix[M+Ct]=it.getMatrix(Ct),i.sunShadowCascade[M+Ct]=it._cascadeData[Ct];M+=St,p++}i.sun[x]=Z,x++}else if(k.isDirectionalLight){let Z=t.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let it=k.shadow,rt=e.get(k);rt.shadowIntensity=it.intensity,rt.shadowBias=it.bias,rt.shadowNormalBias=it.normalBias,rt.shadowRadius=it.radius,rt.shadowMapSize=it.mapSize,i.directionalShadow[y]=rt,i.directionalShadowMap[y]=tt,i.directionalShadowMatrix[y]=k.shadow.matrix,C++}i.directional[y]=Z,y++}else if(k.isSpotLight){let Z=t.get(k);Z.position.setFromMatrixPosition(k.matrixWorld),Z.color.copy(et).multiplyScalar(B),Z.distance=q,Z.coneCos=Math.cos(k.angle),Z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Z.decay=k.decay,i.spot[P]=Z;let it=k.shadow;if(k.map&&(i.spotLightMap[b]=k.map,b++,it.updateMatrices(k),k.castShadow&&R++),i.spotLightMatrix[P]=it.matrix,k.castShadow){let rt=e.get(k);rt.shadowIntensity=it.intensity,rt.shadowBias=it.bias,rt.shadowNormalBias=it.normalBias,rt.shadowRadius=it.radius,rt.shadowMapSize=it.mapSize,i.spotShadow[P]=rt,i.spotShadowMap[P]=tt,D++}P++}else if(k.isRectAreaLight){let Z=t.get(k);Z.color.copy(et).multiplyScalar(B),Z.halfWidth.set(k.width*.5,0,0),Z.halfHeight.set(0,k.height*.5,0),i.rectArea[F]=Z,F++}else if(k.isPointLight){let Z=t.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity),Z.distance=k.distance,Z.decay=k.decay,k.castShadow){let it=k.shadow,rt=e.get(k);rt.shadowIntensity=it.intensity,rt.shadowBias=it.bias,rt.shadowNormalBias=it.normalBias,rt.shadowRadius=it.radius,rt.shadowMapSize=it.mapSize,rt.shadowCameraNear=it.camera.near,rt.shadowCameraFar=it.camera.far,i.pointShadow[g]=rt,i.pointShadowMap[g]=tt,i.pointShadowMatrix[g]=k.shadow.matrix,w++}i.point[g]=Z,g++}else if(k.isHemisphereLight){let Z=t.get(k);Z.skyColor.copy(k.color).multiplyScalar(B),Z.groundColor.copy(k.groundColor).multiplyScalar(B),i.hemi[E]=Z,E++}}F>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=kt.LTC_FLOAT_1,i.rectAreaLTC2=kt.LTC_FLOAT_2):(i.rectAreaLTC1=kt.LTC_HALF_1,i.rectAreaLTC2=kt.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=f,i.ambient[2]=d;let O=i.hash;(O.sunLength!==x||O.directionalLength!==y||O.pointLength!==g||O.spotLength!==P||O.rectAreaLength!==F||O.hemiLength!==E||O.numSunShadows!==p||O.numDirectionalShadows!==C||O.numPointShadows!==w||O.numSpotShadows!==D||O.numSpotMaps!==b||O.numLightProbes!==N)&&(i.sun.length=x,i.directional.length=y,i.spot.length=P,i.rectArea.length=F,i.point.length=g,i.hemi.length=E,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.directionalShadowMatrix.length=C,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=D,i.spotShadowMap.length=D,i.spotLightMatrix.length=D+b-R,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=N,O.sunLength=x,O.directionalLength=y,O.pointLength=g,O.spotLength=P,O.rectAreaLength=F,O.hemiLength=E,O.numSunShadows=p,O.numDirectionalShadows=C,O.numPointShadows=w,O.numSpotShadows=D,O.numSpotMaps=b,O.numLightProbes=N,i.version=Vb++)}function u(h,m){let f=0,d=0,x=0,p=0,M=0,y=0,g=m.matrixWorldInverse;for(let P=0,F=h.length;P<F;P++){let E=h[P];if(E.isSunLight){let C=i.sun[f];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(g),f++}else if(E.isDirectionalLight){let C=i.directional[d];C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),d++}else if(E.isSpotLight){let C=i.spot[p];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),p++}else if(E.isRectAreaLight){let C=i.rectArea[M];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(g),o.identity(),r.copy(E.matrixWorld),r.premultiply(g),o.extractRotation(r),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),M++}else if(E.isPointLight){let C=i.point[x];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(g),x++}else if(E.isHemisphereLight){let C=i.hemi[y];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(g),y++}}}return{setup:a,setupView:u,state:i}}function zm(n){let t=new Gb(n),e=[],i=[],s=[];function r(d){f.camera=d,e.length=0,i.length=0,s.length=0}function o(d){e.push(d)}function a(d){i.push(d)}function u(d){s.push(d)}function h(){t.setup(e)}function m(d){t.setupView(e,d)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:h,setupLightsView:m,pushLight:o,pushShadow:a,pushLightProbeGrid:u}}function Wb(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new zm(n),t.set(s,[a])):r>=o.length?(a=new zm(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Xb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Yb=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],$b=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Bm=new $e,Bo=new Q,Ou=new Q;function Zb(n,t,e){let i=new vo,s=new be,r=new be,o=new Ze,a=new gl,u=new xl,h={},m=e.maxTextureSize,f={[ys]:Pn,[Pn]:ys,[Qn]:Qn},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Xb,fragmentShader:qb}),x=d.clone();x.defines.HORIZONTAL_PASS=1;let p=new cn;p.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ne(p,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ro;let g=this.type;this.render=function(w,D,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||w.length===0)return;this.type===Dp&&(ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ro);let R=n.getRenderTarget(),N=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),J=n.state;J.setBlending(Pi),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let j=g!==this.type;j&&D.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(et=>et.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,et=w.length;k<et;k++){let B=w[k],q=B.shadow;if(q===void 0){ae("WebGLShadowMap:",B,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let tt=q.getFrameExtents();s.multiply(tt),r.copy(q.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(r.x=Math.floor(m/tt.x),s.x=r.x*tt.x,q.mapSize.x=r.x),s.y>m&&(r.y=Math.floor(m/tt.y),s.y=r.y*tt.y,q.mapSize.y=r.y));let Z=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Z,q.map===null||j===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===wr){if(B.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Dn(s.x,s.y,{format:bs,type:pi,minFilter:an,magFilter:an,generateMipmaps:!1}),q.map.texture.name=B.name+".shadowMap",q.map.depthTexture=new ps(s.x,s.y,di),q.map.depthTexture.name=B.name+".shadowMapDepth",q.map.depthTexture.format=Ti,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=pn,q.map.depthTexture.magFilter=pn}else B.isPointLight?(q.map=new Mc(s.x),q.map.depthTexture=new pl(s.x,fi)):(q.map=new Dn(s.x,s.y),q.map.depthTexture=new ps(s.x,s.y,fi)),q.map.depthTexture.name=B.name+".shadowMap",q.map.depthTexture.format=Ti,this.type===Ro?(q.map.depthTexture.compareFunction=Z?xc:gc,q.map.depthTexture.minFilter=an,q.map.depthTexture.magFilter=an):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=pn,q.map.depthTexture.magFilter=pn);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let it=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();B.isPointLight!==!0&&q.updateMatrices(B,b);for(let rt=0;rt<it;rt++){let St=q.getCamera(rt);if(B.isPointLight){let Ct=q.camera,Gt=q.matrix,qt=B.distance||Ct.far;qt!==Ct.far&&(Ct.far=qt,Ct.updateProjectionMatrix()),Bo.setFromMatrixPosition(B.matrixWorld),Ct.position.copy(Bo),Ou.copy(Ct.position),Ou.add(Yb[rt]),Ct.up.copy($b[rt]),Ct.lookAt(Ou),Ct.updateMatrixWorld(),Gt.makeTranslation(-Bo.x,-Bo.y,-Bo.z),Bm.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Bm,Ct.coordinateSystem,Ct.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,rt),n.clear();else{rt===0&&(n.setRenderTarget(q.map),n.clear());let Ct=q.getViewport(rt);o.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),J.viewport(o)}i=q.getFrustum(rt),E(D,b,St,B,this.type)}q.isPointLightShadow!==!0&&this.type===wr&&P(q,b),q.needsUpdate=!1}g=this.type,y.needsUpdate=!1,n.setRenderTarget(R,N,O)};function P(w,D){let b=t.update(M);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,x.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,x.needsUpdate=!0),w.mapPass===null?w.mapPass=new Dn(s.x,s.y,{format:bs,type:pi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(D,null,b,d,M,null),x.uniforms.shadow_pass.value=w.mapPass.texture,x.uniforms.resolution.value.set(w.map.width,w.map.height),x.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(D,null,b,x,M,null)}function F(w,D,b,R){let N=null,O=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)N=O;else if(N=b.isPointLight===!0?u:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let J=N.uuid,j=D.uuid,k=h[J];k===void 0&&(k={},h[J]=k);let et=k[j];et===void 0&&(et=N.clone(),k[j]=et,D.addEventListener("dispose",C)),N=et}if(N.visible=D.visible,N.wireframe=D.wireframe,R===wr?N.side=D.shadowSide!==null?D.shadowSide:D.side:N.side=D.shadowSide!==null?D.shadowSide:f[D.side],N.alphaMap=D.alphaMap,N.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,N.map=D.map,N.clipShadows=D.clipShadows,N.clippingPlanes=D.clippingPlanes,N.clipIntersection=D.clipIntersection,N.displacementMap=D.displacementMap,N.displacementScale=D.displacementScale,N.displacementBias=D.displacementBias,N.wireframeLinewidth=D.wireframeLinewidth,N.linewidth=D.linewidth,b.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let J=n.properties.get(N);J.light=b}return N}function E(w,D,b,R,N){if(w.visible===!1)return;if(w.layers.test(D.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===wr)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let j=t.update(w),k=w.material;if(Array.isArray(k)){let et=j.groups;for(let B=0,q=et.length;B<q;B++){let tt=et[B],Z=k[tt.materialIndex];if(Z&&Z.visible){let it=F(w,Z,R,N);w.onBeforeShadow(n,w,D,b,j,it,tt),n.renderBufferDirect(b,null,j,it,w,tt),w.onAfterShadow(n,w,D,b,j,it,tt)}}}else if(k.visible){let et=F(w,k,R,N);w.onBeforeShadow(n,w,D,b,j,et,null),n.renderBufferDirect(b,null,j,et,w,null),w.onAfterShadow(n,w,D,b,j,et,null)}}let J=w.children;for(let j=0,k=J.length;j<k;j++)E(J[j],D,b,R,N)}function C(w){w.target.removeEventListener("dispose",C);for(let b in h){let R=h[b],N=w.target.uuid;N in R&&(R[N].dispose(),delete R[N])}}}function Jb(n,t){function e(){let G=!1,wt=new Ze,dt=null,Et=new Ze(0,0,0,0);return{setMask:function(Rt){dt!==Rt&&!G&&(n.colorMask(Rt,Rt,Rt,Rt),dt=Rt)},setLocked:function(Rt){G=Rt},setClear:function(Rt,xt,ee,$t,ze){ze===!0&&(Rt*=$t,xt*=$t,ee*=$t),wt.set(Rt,xt,ee,$t),Et.equals(wt)===!1&&(n.clearColor(Rt,xt,ee,$t),Et.copy(wt))},reset:function(){G=!1,dt=null,Et.set(-1,0,0,0)}}}function i(){let G=!1,wt=!1,dt=null,Et=null,Rt=null;return{setReversed:function(xt){if(wt!==xt){let ee=t.get("EXT_clip_control");xt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT),wt=xt;let $t=Rt;Rt=null,this.setClear($t)}},getReversed:function(){return wt},setTest:function(xt){xt?Y(n.DEPTH_TEST):ut(n.DEPTH_TEST)},setMask:function(xt){dt!==xt&&!G&&(n.depthMask(xt),dt=xt)},setFunc:function(xt){if(wt&&(xt=dm[xt]),Et!==xt){switch(xt){case Za:n.depthFunc(n.NEVER);break;case Ja:n.depthFunc(n.ALWAYS);break;case Ka:n.depthFunc(n.LESS);break;case yr:n.depthFunc(n.LEQUAL);break;case ja:n.depthFunc(n.EQUAL);break;case Qa:n.depthFunc(n.GEQUAL);break;case tl:n.depthFunc(n.GREATER);break;case el:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Et=xt}},setLocked:function(xt){G=xt},setClear:function(xt){Rt!==xt&&(Rt=xt,wt&&(xt=1-xt),n.clearDepth(xt))},reset:function(){G=!1,dt=null,Et=null,Rt=null,wt=!1}}}function s(){let G=!1,wt=null,dt=null,Et=null,Rt=null,xt=null,ee=null,$t=null,ze=null;return{setTest:function(Se){G||(Se?Y(n.STENCIL_TEST):ut(n.STENCIL_TEST))},setMask:function(Se){wt!==Se&&!G&&(n.stencilMask(Se),wt=Se)},setFunc:function(Se,En,On){(dt!==Se||Et!==En||Rt!==On)&&(n.stencilFunc(Se,En,On),dt=Se,Et=En,Rt=On)},setOp:function(Se,En,On){(xt!==Se||ee!==En||$t!==On)&&(n.stencilOp(Se,En,On),xt=Se,ee=En,$t=On)},setLocked:function(Se){G=Se},setClear:function(Se){ze!==Se&&(n.clearStencil(Se),ze=Se)},reset:function(){G=!1,wt=null,dt=null,Et=null,Rt=null,xt=null,ee=null,$t=null,ze=null}}}let r=new e,o=new i,a=new s,u=new WeakMap,h=new WeakMap,m={},f={},d={},x=new WeakMap,p=[],M=null,y=!1,g=null,P=null,F=null,E=null,C=null,w=null,D=null,b=new ue(0,0,0),R=0,N=!1,O=null,J=null,j=null,k=null,et=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,tt=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=tt>=1):Z.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=tt>=2);let it=null,rt={},St=n.getParameter(n.SCISSOR_BOX),Ct=n.getParameter(n.VIEWPORT),Gt=new Ze().fromArray(St),qt=new Ze().fromArray(Ct);function Ft(G,wt,dt,Et){let Rt=new Uint8Array(4),xt=n.createTexture();n.bindTexture(G,xt),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ee=0;ee<dt;ee++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(wt,0,n.RGBA,1,1,Et,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(wt+ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return xt}let W={};W[n.TEXTURE_2D]=Ft(n.TEXTURE_2D,n.TEXTURE_2D,1),W[n.TEXTURE_CUBE_MAP]=Ft(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[n.TEXTURE_2D_ARRAY]=Ft(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),W[n.TEXTURE_3D]=Ft(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(n.DEPTH_TEST),o.setFunc(yr),Nt(!1),re(jh),Y(n.CULL_FACE),ct(Pi);function Y(G){m[G]!==!0&&(n.enable(G),m[G]=!0)}function ut(G){m[G]!==!1&&(n.disable(G),m[G]=!1)}function mt(G,wt){return d[G]!==wt?(n.bindFramebuffer(G,wt),d[G]=wt,G===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=wt),G===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=wt),!0):!1}function _t(G,wt){let dt=p,Et=!1;if(G){dt=x.get(wt),dt===void 0&&(dt=[],x.set(wt,dt));let Rt=G.textures;if(dt.length!==Rt.length||dt[0]!==n.COLOR_ATTACHMENT0){for(let xt=0,ee=Rt.length;xt<ee;xt++)dt[xt]=n.COLOR_ATTACHMENT0+xt;dt.length=Rt.length,Et=!0}}else dt[0]!==n.BACK&&(dt[0]=n.BACK,Et=!0);Et&&n.drawBuffers(dt)}function Pt(G){return M!==G?(n.useProgram(G),M=G,!0):!1}let le={[Os]:n.FUNC_ADD,[Up]:n.FUNC_SUBTRACT,[Fp]:n.FUNC_REVERSE_SUBTRACT};le[Op]=n.MIN,le[zp]=n.MAX;let Dt={[Bp]:n.ZERO,[kp]:n.ONE,[Vp]:n.SRC_COLOR,[nu]:n.SRC_ALPHA,[Yp]:n.SRC_ALPHA_SATURATE,[Xp]:n.DST_COLOR,[Gp]:n.DST_ALPHA,[Hp]:n.ONE_MINUS_SRC_COLOR,[iu]:n.ONE_MINUS_SRC_ALPHA,[qp]:n.ONE_MINUS_DST_COLOR,[Wp]:n.ONE_MINUS_DST_ALPHA,[$p]:n.CONSTANT_COLOR,[Zp]:n.ONE_MINUS_CONSTANT_COLOR,[Jp]:n.CONSTANT_ALPHA,[Kp]:n.ONE_MINUS_CONSTANT_ALPHA};function ct(G,wt,dt,Et,Rt,xt,ee,$t,ze,Se){if(G===Pi){y===!0&&(ut(n.BLEND),y=!1);return}if(y===!1&&(Y(n.BLEND),y=!0),G!==Np){if(G!==g||Se!==N){if((P!==Os||C!==Os)&&(n.blendEquation(n.FUNC_ADD),P=Os,C=Os),Se)switch(G){case Ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qh:n.blendFunc(n.ONE,n.ONE);break;case tu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:he("WebGLState: Invalid blending: ",G);break}else switch(G){case Ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case tu:he("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eu:he("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:he("WebGLState: Invalid blending: ",G);break}F=null,E=null,w=null,D=null,b.set(0,0,0),R=0,g=G,N=Se}return}Rt=Rt||wt,xt=xt||dt,ee=ee||Et,(wt!==P||Rt!==C)&&(n.blendEquationSeparate(le[wt],le[Rt]),P=wt,C=Rt),(dt!==F||Et!==E||xt!==w||ee!==D)&&(n.blendFuncSeparate(Dt[dt],Dt[Et],Dt[xt],Dt[ee]),F=dt,E=Et,w=xt,D=ee),($t.equals(b)===!1||ze!==R)&&(n.blendColor($t.r,$t.g,$t.b,ze),b.copy($t),R=ze),g=G,N=!1}function Qt(G,wt){G.side===Qn?ut(n.CULL_FACE):Y(n.CULL_FACE);let dt=G.side===Pn;wt&&(dt=!dt),Nt(dt),G.blending===Ar&&G.transparent===!1?ct(Pi):ct(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Et=G.stencilWrite;a.setTest(Et),Et&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),_e(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Y(n.SAMPLE_ALPHA_TO_COVERAGE):ut(n.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(G){O!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),O=G)}function re(G){G!==Pp?(Y(n.CULL_FACE),G!==J&&(G===jh?n.cullFace(n.BACK):G===Lp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ut(n.CULL_FACE),J=G}function ge(G){G!==j&&(q&&n.lineWidth(G),j=G)}function _e(G,wt,dt){G?(Y(n.POLYGON_OFFSET_FILL),(k!==wt||et!==dt)&&(k=wt,et=dt,o.getReversed()&&(wt=-wt),n.polygonOffset(wt,dt))):ut(n.POLYGON_OFFSET_FILL)}function oe(G){G?Y(n.SCISSOR_TEST):ut(n.SCISSOR_TEST)}function Oe(G){G===void 0&&(G=n.TEXTURE0+B-1),it!==G&&(n.activeTexture(G),it=G)}function H(G,wt,dt){dt===void 0&&(it===null?dt=n.TEXTURE0+B-1:dt=it);let Et=rt[dt];Et===void 0&&(Et={type:void 0,texture:void 0},rt[dt]=Et),(Et.type!==G||Et.texture!==wt)&&(it!==dt&&(n.activeTexture(dt),it=dt),n.bindTexture(G,wt||W[G]),Et.type=G,Et.texture=wt)}function He(){let G=rt[it];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Me(){try{n.compressedTexImage2D(...arguments)}catch(G){he("WebGLState:",G)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(G){he("WebGLState:",G)}}function v(){try{n.texSubImage2D(...arguments)}catch(G){he("WebGLState:",G)}}function $(){try{n.texSubImage3D(...arguments)}catch(G){he("WebGLState:",G)}}function ot(){try{n.compressedTexSubImage2D(...arguments)}catch(G){he("WebGLState:",G)}}function ht(){try{n.compressedTexSubImage3D(...arguments)}catch(G){he("WebGLState:",G)}}function At(){try{n.texStorage2D(...arguments)}catch(G){he("WebGLState:",G)}}function Lt(){try{n.texStorage3D(...arguments)}catch(G){he("WebGLState:",G)}}function ft(){try{n.texImage2D(...arguments)}catch(G){he("WebGLState:",G)}}function pt(){try{n.texImage3D(...arguments)}catch(G){he("WebGLState:",G)}}function It(G){return f[G]!==void 0?f[G]:n.getParameter(G)}function Yt(G,wt){f[G]!==wt&&(n.pixelStorei(G,wt),f[G]=wt)}function Ot(G){Gt.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Gt.copy(G))}function Ut(G){qt.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),qt.copy(G))}function te(G,wt){let dt=h.get(wt);dt===void 0&&(dt=new WeakMap,h.set(wt,dt));let Et=dt.get(G);Et===void 0&&(Et=n.getUniformBlockIndex(wt,G.name),dt.set(G,Et))}function se(G,wt){let Et=h.get(wt).get(G);u.get(wt)!==Et&&(n.uniformBlockBinding(wt,Et,G.__bindingPointIndex),u.set(wt,Et))}function fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),m={},f={},it=null,rt={},d={},x=new WeakMap,p=[],M=null,y=!1,g=null,P=null,F=null,E=null,C=null,w=null,D=null,b=new ue(0,0,0),R=0,N=!1,O=null,J=null,j=null,k=null,et=null,Gt.set(0,0,n.canvas.width,n.canvas.height),qt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Y,disable:ut,bindFramebuffer:mt,drawBuffers:_t,useProgram:Pt,setBlending:ct,setMaterial:Qt,setFlipSided:Nt,setCullFace:re,setLineWidth:ge,setPolygonOffset:_e,setScissorTest:oe,activeTexture:Oe,bindTexture:H,unbindTexture:He,compressedTexImage2D:Me,compressedTexImage3D:U,texImage2D:ft,texImage3D:pt,pixelStorei:Yt,getParameter:It,updateUBOMapping:te,uniformBlockBinding:se,texStorage2D:At,texStorage3D:Lt,texSubImage2D:v,texSubImage3D:$,compressedTexSubImage2D:ot,compressedTexSubImage3D:ht,scissor:Ot,viewport:Ut,reset:fe}}function Kb(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new be,m=new WeakMap,f=new Set,d,x=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,v){return p?new OffscreenCanvas(U,v):uo("canvas")}function y(U,v,$){let ot=1,ht=Me(U);if((ht.width>$||ht.height>$)&&(ot=$/Math.max(ht.width,ht.height)),ot<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let At=Math.floor(ot*ht.width),Lt=Math.floor(ot*ht.height);d===void 0&&(d=M(At,Lt));let ft=v?M(At,Lt):d;return ft.width=At,ft.height=Lt,ft.getContext("2d").drawImage(U,0,0,At,Lt),ae("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+At+"x"+Lt+")."),ft}else return"data"in U&&ae("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),U;return U}function g(U){return U.generateMipmaps}function P(U){n.generateMipmap(U)}function F(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(U,v,$,ot,ht,At=!1){if(U!==null){if(n[U]!==void 0)return n[U];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Lt;ot&&(Lt=t.get("EXT_texture_norm16"),Lt||ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=v;if(v===n.RED&&($===n.FLOAT&&(ft=n.R32F),$===n.HALF_FLOAT&&(ft=n.R16F),$===n.UNSIGNED_BYTE&&(ft=n.R8),$===n.UNSIGNED_SHORT&&Lt&&(ft=Lt.R16_EXT),$===n.SHORT&&Lt&&(ft=Lt.R16_SNORM_EXT)),v===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(ft=n.R8UI),$===n.UNSIGNED_SHORT&&(ft=n.R16UI),$===n.UNSIGNED_INT&&(ft=n.R32UI),$===n.BYTE&&(ft=n.R8I),$===n.SHORT&&(ft=n.R16I),$===n.INT&&(ft=n.R32I)),v===n.RG&&($===n.FLOAT&&(ft=n.RG32F),$===n.HALF_FLOAT&&(ft=n.RG16F),$===n.UNSIGNED_BYTE&&(ft=n.RG8),$===n.UNSIGNED_SHORT&&Lt&&(ft=Lt.RG16_EXT),$===n.SHORT&&Lt&&(ft=Lt.RG16_SNORM_EXT)),v===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(ft=n.RG8UI),$===n.UNSIGNED_SHORT&&(ft=n.RG16UI),$===n.UNSIGNED_INT&&(ft=n.RG32UI),$===n.BYTE&&(ft=n.RG8I),$===n.SHORT&&(ft=n.RG16I),$===n.INT&&(ft=n.RG32I)),v===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(ft=n.RGB8UI),$===n.UNSIGNED_SHORT&&(ft=n.RGB16UI),$===n.UNSIGNED_INT&&(ft=n.RGB32UI),$===n.BYTE&&(ft=n.RGB8I),$===n.SHORT&&(ft=n.RGB16I),$===n.INT&&(ft=n.RGB32I)),v===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(ft=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(ft=n.RGBA16UI),$===n.UNSIGNED_INT&&(ft=n.RGBA32UI),$===n.BYTE&&(ft=n.RGBA8I),$===n.SHORT&&(ft=n.RGBA16I),$===n.INT&&(ft=n.RGBA32I)),v===n.RGB&&($===n.UNSIGNED_SHORT&&Lt&&(ft=Lt.RGB16_EXT),$===n.SHORT&&Lt&&(ft=Lt.RGB16_SNORM_EXT),$===n.UNSIGNED_INT_5_9_9_9_REV&&(ft=n.RGB9_E5),$===n.UNSIGNED_INT_10F_11F_11F_REV&&(ft=n.R11F_G11F_B10F)),v===n.RGBA){let pt=At?co:Ae.getTransfer(ht);$===n.FLOAT&&(ft=n.RGBA32F),$===n.HALF_FLOAT&&(ft=n.RGBA16F),$===n.UNSIGNED_BYTE&&(ft=pt===Ue?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT&&Lt&&(ft=Lt.RGBA16_EXT),$===n.SHORT&&Lt&&(ft=Lt.RGBA16_SNORM_EXT),$===n.UNSIGNED_SHORT_4_4_4_4&&(ft=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(ft=n.RGB5_A1)}return(ft===n.R16F||ft===n.R32F||ft===n.RG16F||ft===n.RG32F||ft===n.RGBA16F||ft===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function C(U,v){let $;return U?v===null||v===fi||v===Tr?$=n.DEPTH24_STENCIL8:v===di?$=n.DEPTH32F_STENCIL8:v===Er&&($=n.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===fi||v===Tr?$=n.DEPTH_COMPONENT24:v===di?$=n.DEPTH_COMPONENT32F:v===Er&&($=n.DEPTH_COMPONENT16),$}function w(U,v){return g(U)===!0||U.isFramebufferTexture&&U.minFilter!==pn&&U.minFilter!==an?Math.log2(Math.max(v.width,v.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?v.mipmaps.length:1}function D(U){let v=U.target;v.removeEventListener("dispose",D),R(v),v.isVideoTexture&&m.delete(v),v.isHTMLTexture&&f.delete(v)}function b(U){let v=U.target;v.removeEventListener("dispose",b),O(v)}function R(U){let v=i.get(U);if(v.__webglInit===void 0)return;let $=U.source,ot=x.get($);if(ot){let ht=ot[v.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&N(U),Object.keys(ot).length===0&&x.delete($)}i.remove(U)}function N(U){let v=i.get(U);n.deleteTexture(v.__webglTexture);let $=U.source,ot=x.get($);delete ot[v.__cacheKey],o.memory.textures--}function O(U){let v=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(v.__webglFramebuffer[ot]))for(let ht=0;ht<v.__webglFramebuffer[ot].length;ht++)n.deleteFramebuffer(v.__webglFramebuffer[ot][ht]);else n.deleteFramebuffer(v.__webglFramebuffer[ot]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[ot])}else{if(Array.isArray(v.__webglFramebuffer))for(let ot=0;ot<v.__webglFramebuffer.length;ot++)n.deleteFramebuffer(v.__webglFramebuffer[ot]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ot=0;ot<v.__webglColorRenderbuffer.length;ot++)v.__webglColorRenderbuffer[ot]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[ot]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let $=U.textures;for(let ot=0,ht=$.length;ot<ht;ot++){let At=i.get($[ot]);At.__webglTexture&&(n.deleteTexture(At.__webglTexture),o.memory.textures--),i.remove($[ot])}i.remove(U)}let J=0;function j(){J=0}function k(){return J}function et(U){J=U}function B(){let U=J;return U>=s.maxTextures&&ae("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,U}function q(U){let v=[];return v.push(U.wrapS),v.push(U.wrapT),v.push(U.wrapR||0),v.push(U.magFilter),v.push(U.minFilter),v.push(U.anisotropy),v.push(U.internalFormat),v.push(U.format),v.push(U.type),v.push(U.generateMipmaps),v.push(U.premultiplyAlpha),v.push(U.flipY),v.push(U.unpackAlignment),v.push(U.colorSpace),v.join()}function tt(U,v){let $=i.get(U);if(U.isVideoTexture&&H(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&$.__version!==U.version){let ot=U.image;if(ot===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{ut($,U,v);return}}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+v)}function Z(U,v){let $=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){ut($,U,v);return}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+v)}function it(U,v){let $=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){ut($,U,v);return}e.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+v)}function rt(U,v){let $=i.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&$.__version!==U.version){mt($,U,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+v)}let St={[nl]:n.REPEAT,[Ei]:n.CLAMP_TO_EDGE,[il]:n.MIRRORED_REPEAT},Ct={[pn]:n.NEAREST,[tm]:n.NEAREST_MIPMAP_NEAREST,[Po]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[Dl]:n.LINEAR_MIPMAP_NEAREST,[vs]:n.LINEAR_MIPMAP_LINEAR},Gt={[sm]:n.NEVER,[cm]:n.ALWAYS,[rm]:n.LESS,[gc]:n.LEQUAL,[om]:n.EQUAL,[xc]:n.GEQUAL,[am]:n.GREATER,[lm]:n.NOTEQUAL};function qt(U,v){if(v.type===di&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===an||v.magFilter===Dl||v.magFilter===Po||v.magFilter===vs||v.minFilter===an||v.minFilter===Dl||v.minFilter===Po||v.minFilter===vs)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,St[v.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,St[v.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,St[v.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,Ct[v.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,Ct[v.minFilter]),v.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,Gt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===pn||v.minFilter!==Po&&v.minFilter!==vs||v.type===di&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");n.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ft(U,v){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,v.addEventListener("dispose",D));let ot=v.source,ht=x.get(ot);ht===void 0&&(ht={},x.set(ot,ht));let At=q(v);if(At!==U.__cacheKey){ht[At]===void 0&&(ht[At]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ht[At].usedTimes++;let Lt=ht[U.__cacheKey];Lt!==void 0&&(ht[U.__cacheKey].usedTimes--,Lt.usedTimes===0&&N(v)),U.__cacheKey=At,U.__webglTexture=ht[At].texture}return $}function W(U,v,$){return Math.floor(Math.floor(U/$)/v)}function Y(U,v,$,ot){let At=U.updateRanges;if(At.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,$,ot,v.data);else{At.sort((Yt,Ot)=>Yt.start-Ot.start);let Lt=0;for(let Yt=1;Yt<At.length;Yt++){let Ot=At[Lt],Ut=At[Yt],te=Ot.start+Ot.count,se=W(Ut.start,v.width,4),fe=W(Ot.start,v.width,4);Ut.start<=te+1&&se===fe&&W(Ut.start+Ut.count-1,v.width,4)===se?Ot.count=Math.max(Ot.count,Ut.start+Ut.count-Ot.start):(++Lt,At[Lt]=Ut)}At.length=Lt+1;let ft=e.getParameter(n.UNPACK_ROW_LENGTH),pt=e.getParameter(n.UNPACK_SKIP_PIXELS),It=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Yt=0,Ot=At.length;Yt<Ot;Yt++){let Ut=At[Yt],te=Math.floor(Ut.start/4),se=Math.ceil(Ut.count/4),fe=te%v.width,G=Math.floor(te/v.width),wt=se,dt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,fe),e.pixelStorei(n.UNPACK_SKIP_ROWS,G),e.texSubImage2D(n.TEXTURE_2D,0,fe,G,wt,dt,$,ot,v.data)}U.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,ft),e.pixelStorei(n.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(n.UNPACK_SKIP_ROWS,It)}}function ut(U,v,$){let ot=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ot=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ot=n.TEXTURE_3D);let ht=Ft(U,v),At=v.source;e.bindTexture(ot,U.__webglTexture,n.TEXTURE0+$);let Lt=i.get(At);if(At.version!==Lt.__version||ht===!0){if(e.activeTexture(n.TEXTURE0+$),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let dt=Ae.getPrimaries(Ae.workingColorSpace),Et=v.colorSpace===Yi?null:Ae.getPrimaries(v.colorSpace),Rt=v.colorSpace===Yi||dt===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let pt=y(v.image,!1,s.maxTextureSize);pt=He(v,pt);let It=r.convert(v.format,v.colorSpace),Yt=r.convert(v.type),Ot=E(v.internalFormat,It,Yt,v.normalized,v.colorSpace,v.isVideoTexture);qt(ot,v);let Ut,te=v.mipmaps,se=v.isVideoTexture!==!0,fe=Lt.__version===void 0||ht===!0,G=At.dataReady,wt=w(v,pt);if(v.isDepthTexture)Ot=C(v.format===Ms,v.type),fe&&(se?e.texStorage2D(n.TEXTURE_2D,1,Ot,pt.width,pt.height):e.texImage2D(n.TEXTURE_2D,0,Ot,pt.width,pt.height,0,It,Yt,null));else if(v.isDataTexture)if(te.length>0){se&&fe&&e.texStorage2D(n.TEXTURE_2D,wt,Ot,te[0].width,te[0].height);for(let dt=0,Et=te.length;dt<Et;dt++)Ut=te[dt],se?G&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,Ut.width,Ut.height,It,Yt,Ut.data):e.texImage2D(n.TEXTURE_2D,dt,Ot,Ut.width,Ut.height,0,It,Yt,Ut.data);v.generateMipmaps=!1}else se?(fe&&e.texStorage2D(n.TEXTURE_2D,wt,Ot,pt.width,pt.height),G&&Y(v,pt,It,Yt)):e.texImage2D(n.TEXTURE_2D,0,Ot,pt.width,pt.height,0,It,Yt,pt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){se&&fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Ot,te[0].width,te[0].height,pt.depth);for(let dt=0,Et=te.length;dt<Et;dt++)if(Ut=te[dt],v.format!==ti)if(It!==null)if(se){if(G)if(v.layerUpdates.size>0){let Rt=Eu(Ut.width,Ut.height,v.format,v.type);for(let xt of v.layerUpdates){let ee=Ut.data.subarray(xt*Rt/Ut.data.BYTES_PER_ELEMENT,(xt+1)*Rt/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,xt,Ut.width,Ut.height,1,It,ee)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,Ut.width,Ut.height,pt.depth,It,Ut.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,dt,Ot,Ut.width,Ut.height,pt.depth,0,Ut.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,Ut.width,Ut.height,pt.depth,It,Yt,Ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,dt,Ot,Ut.width,Ut.height,pt.depth,0,It,Yt,Ut.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{se&&fe&&e.texStorage2D(n.TEXTURE_2D,wt,Ot,te[0].width,te[0].height);for(let dt=0,Et=te.length;dt<Et;dt++)Ut=te[dt],v.format!==ti?It!==null?se?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,dt,0,0,Ut.width,Ut.height,It,Ut.data):e.compressedTexImage2D(n.TEXTURE_2D,dt,Ot,Ut.width,Ut.height,0,Ut.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?G&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,Ut.width,Ut.height,It,Yt,Ut.data):e.texImage2D(n.TEXTURE_2D,dt,Ot,Ut.width,Ut.height,0,It,Yt,Ut.data)}else if(v.isDataArrayTexture)if(se){if(fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Ot,pt.width,pt.height,pt.depth),G)if(v.layerUpdates.size>0){let dt=Eu(pt.width,pt.height,v.format,v.type);for(let Et of v.layerUpdates){let Rt=pt.data.subarray(Et*dt/pt.data.BYTES_PER_ELEMENT,(Et+1)*dt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Et,pt.width,pt.height,1,It,Yt,Rt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,It,Yt,pt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ot,pt.width,pt.height,pt.depth,0,It,Yt,pt.data);else if(v.isData3DTexture)se?(fe&&e.texStorage3D(n.TEXTURE_3D,wt,Ot,pt.width,pt.height,pt.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,It,Yt,pt.data)):e.texImage3D(n.TEXTURE_3D,0,Ot,pt.width,pt.height,pt.depth,0,It,Yt,pt.data);else if(v.isFramebufferTexture){if(fe)if(se)e.texStorage2D(n.TEXTURE_2D,wt,Ot,pt.width,pt.height);else{let dt=pt.width,Et=pt.height;for(let Rt=0;Rt<wt;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,Ot,dt,Et,0,It,Yt,null),dt>>=1,Et>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let dt=n.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),pt.parentNode!==dt){dt.appendChild(pt),f.add(v),dt.onpaint=Et=>{let Rt=Et.changedElements;for(let xt of f)Rt.includes(xt.image)&&(xt.needsUpdate=!0)},dt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,pt);else{let Rt=n.RGBA,xt=n.RGBA,ee=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Rt,xt,ee,pt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(te.length>0){if(se&&fe){let dt=Me(te[0]);e.texStorage2D(n.TEXTURE_2D,wt,Ot,dt.width,dt.height)}for(let dt=0,Et=te.length;dt<Et;dt++)Ut=te[dt],se?G&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,It,Yt,Ut):e.texImage2D(n.TEXTURE_2D,dt,Ot,It,Yt,Ut);v.generateMipmaps=!1}else if(se){if(fe){let dt=Me(pt);e.texStorage2D(n.TEXTURE_2D,wt,Ot,dt.width,dt.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,It,Yt,pt)}else e.texImage2D(n.TEXTURE_2D,0,Ot,It,Yt,pt);g(v)&&P(ot),Lt.__version=At.version,v.onUpdate&&v.onUpdate(v)}U.__version=v.version}function mt(U,v,$){if(v.image.length!==6)return;let ot=Ft(U,v),ht=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+$);let At=i.get(ht);if(ht.version!==At.__version||ot===!0){e.activeTexture(n.TEXTURE0+$);let Lt=Ae.getPrimaries(Ae.workingColorSpace),ft=v.colorSpace===Yi?null:Ae.getPrimaries(v.colorSpace),pt=v.colorSpace===Yi||Lt===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let It=v.isCompressedTexture||v.image[0].isCompressedTexture,Yt=v.image[0]&&v.image[0].isDataTexture,Ot=[];for(let xt=0;xt<6;xt++)!It&&!Yt?Ot[xt]=y(v.image[xt],!0,s.maxCubemapSize):Ot[xt]=Yt?v.image[xt].image:v.image[xt],Ot[xt]=He(v,Ot[xt]);let Ut=Ot[0],te=r.convert(v.format,v.colorSpace),se=r.convert(v.type),fe=E(v.internalFormat,te,se,v.normalized,v.colorSpace),G=v.isVideoTexture!==!0,wt=At.__version===void 0||ot===!0,dt=ht.dataReady,Et=w(v,Ut);qt(n.TEXTURE_CUBE_MAP,v);let Rt;if(It){G&&wt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,fe,Ut.width,Ut.height);for(let xt=0;xt<6;xt++){Rt=Ot[xt].mipmaps;for(let ee=0;ee<Rt.length;ee++){let $t=Rt[ee];v.format!==ti?te!==null?G?dt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ee,0,0,$t.width,$t.height,te,$t.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ee,fe,$t.width,$t.height,0,$t.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ee,0,0,$t.width,$t.height,te,se,$t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ee,fe,$t.width,$t.height,0,te,se,$t.data)}}}else{if(Rt=v.mipmaps,G&&wt){Rt.length>0&&Et++;let xt=Me(Ot[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,fe,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Yt){G?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ot[xt].width,Ot[xt].height,te,se,Ot[xt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,fe,Ot[xt].width,Ot[xt].height,0,te,se,Ot[xt].data);for(let ee=0;ee<Rt.length;ee++){let ze=Rt[ee].image[xt].image;G?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ee+1,0,0,ze.width,ze.height,te,se,ze.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ee+1,fe,ze.width,ze.height,0,te,se,ze.data)}}else{G?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,te,se,Ot[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,fe,te,se,Ot[xt]);for(let ee=0;ee<Rt.length;ee++){let $t=Rt[ee];G?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ee+1,0,0,te,se,$t.image[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ee+1,fe,te,se,$t.image[xt])}}}g(v)&&P(n.TEXTURE_CUBE_MAP),At.__version=ht.version,v.onUpdate&&v.onUpdate(v)}U.__version=v.version}function _t(U,v,$,ot,ht,At){let Lt=r.convert($.format,$.colorSpace),ft=r.convert($.type),pt=E($.internalFormat,Lt,ft,$.normalized,$.colorSpace),It=i.get(v),Yt=i.get($);if(Yt.__renderTarget=v,!It.__hasExternalTextures){let Ot=Math.max(1,v.width>>At),Ut=Math.max(1,v.height>>At);ht===n.TEXTURE_3D||ht===n.TEXTURE_2D_ARRAY?e.texImage3D(ht,At,pt,Ot,Ut,v.depth,0,Lt,ft,null):e.texImage2D(ht,At,pt,Ot,Ut,0,Lt,ft,null)}e.bindFramebuffer(n.FRAMEBUFFER,U),Oe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,ht,Yt.__webglTexture,0,oe(v)):(ht===n.TEXTURE_2D||ht>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ot,ht,Yt.__webglTexture,At),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Pt(U,v,$){if(n.bindRenderbuffer(n.RENDERBUFFER,U),v.depthBuffer){let ot=v.depthTexture,ht=ot&&ot.isDepthTexture?ot.type:null,At=C(v.stencilBuffer,ht),Lt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Oe(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe(v),At,v.width,v.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe(v),At,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,At,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Lt,n.RENDERBUFFER,U)}else{let ot=v.textures;for(let ht=0;ht<ot.length;ht++){let At=ot[ht],Lt=r.convert(At.format,At.colorSpace),ft=r.convert(At.type),pt=E(At.internalFormat,Lt,ft,At.normalized,At.colorSpace);Oe(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe(v),pt,v.width,v.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe(v),pt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,pt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(U,v,$){let ot=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,U),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ht=i.get(v.depthTexture);if(ht.__renderTarget=v,(!ht.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ot){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,v.depthTexture.addEventListener("dispose",D)),ht.__webglTexture===void 0){ht.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,ht.__webglTexture),qt(n.TEXTURE_CUBE_MAP,v.depthTexture);let It=r.convert(v.depthTexture.format),Yt=r.convert(v.depthTexture.type),Ot;v.depthTexture.format===Ti?Ot=n.DEPTH_COMPONENT24:v.depthTexture.format===Ms&&(Ot=n.DEPTH24_STENCIL8);for(let Ut=0;Ut<6;Ut++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,Ot,v.width,v.height,0,It,Yt,null)}}else tt(v.depthTexture,0);let At=ht.__webglTexture,Lt=oe(v),ft=ot?n.TEXTURE_CUBE_MAP_POSITIVE_X+$:n.TEXTURE_2D,pt=v.depthTexture.format===Ms?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ti)Oe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pt,ft,At,0,Lt):n.framebufferTexture2D(n.FRAMEBUFFER,pt,ft,At,0);else if(v.depthTexture.format===Ms)Oe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pt,ft,At,0,Lt):n.framebufferTexture2D(n.FRAMEBUFFER,pt,ft,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Dt(U){let v=i.get(U),$=U.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==U.depthTexture){let ot=U.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ot){let ht=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ot.removeEventListener("dispose",ht)};ot.addEventListener("dispose",ht),v.__depthDisposeCallback=ht}v.__boundDepthTexture=ot}if(U.depthTexture&&!v.__autoAllocateDepthBuffer)if($)for(let ot=0;ot<6;ot++)le(v.__webglFramebuffer[ot],U,ot);else{let ot=U.texture.mipmaps;ot&&ot.length>0?le(v.__webglFramebuffer[0],U,0):le(v.__webglFramebuffer,U,0)}else if($){v.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ot]),v.__webglDepthbuffer[ot]===void 0)v.__webglDepthbuffer[ot]=n.createRenderbuffer(),Pt(v.__webglDepthbuffer[ot],U,!1);else{let ht=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=v.__webglDepthbuffer[ot];n.bindRenderbuffer(n.RENDERBUFFER,At),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,At)}}else{let ot=U.texture.mipmaps;if(ot&&ot.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Pt(v.__webglDepthbuffer,U,!1);else{let ht=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,At),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,At)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(U,v,$){let ot=i.get(U);v!==void 0&&_t(ot.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Dt(U)}function Qt(U){let v=U.texture,$=i.get(U),ot=i.get(v);U.addEventListener("dispose",b);let ht=U.textures,At=U.isWebGLCubeRenderTarget===!0,Lt=ht.length>1;if(Lt||(ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture()),ot.__version=v.version,o.memory.textures++),At){$.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(v.mipmaps&&v.mipmaps.length>0){$.__webglFramebuffer[ft]=[];for(let pt=0;pt<v.mipmaps.length;pt++)$.__webglFramebuffer[ft][pt]=n.createFramebuffer()}else $.__webglFramebuffer[ft]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){$.__webglFramebuffer=[];for(let ft=0;ft<v.mipmaps.length;ft++)$.__webglFramebuffer[ft]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(Lt)for(let ft=0,pt=ht.length;ft<pt;ft++){let It=i.get(ht[ft]);It.__webglTexture===void 0&&(It.__webglTexture=n.createTexture(),o.memory.textures++)}if(U.samples>0&&Oe(U)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ft=0;ft<ht.length;ft++){let pt=ht[ft];$.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[ft]);let It=r.convert(pt.format,pt.colorSpace),Yt=r.convert(pt.type),Ot=E(pt.internalFormat,It,Yt,pt.normalized,pt.colorSpace,U.isXRRenderTarget===!0),Ut=oe(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,Ot,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,$.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),Pt($.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(At){e.bindTexture(n.TEXTURE_CUBE_MAP,ot.__webglTexture),qt(n.TEXTURE_CUBE_MAP,v);for(let ft=0;ft<6;ft++)if(v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)_t($.__webglFramebuffer[ft][pt],U,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,pt);else _t($.__webglFramebuffer[ft],U,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(v)&&P(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let ft=0,pt=ht.length;ft<pt;ft++){let It=ht[ft],Yt=i.get(It),Ot=n.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ot=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Ot,Yt.__webglTexture),qt(Ot,It),_t($.__webglFramebuffer,U,It,n.COLOR_ATTACHMENT0+ft,Ot,0),g(It)&&P(Ot)}e.unbindTexture()}else{let ft=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ft=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,ot.__webglTexture),qt(ft,v),v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)_t($.__webglFramebuffer[pt],U,v,n.COLOR_ATTACHMENT0,ft,pt);else _t($.__webglFramebuffer,U,v,n.COLOR_ATTACHMENT0,ft,0);g(v)&&P(ft),e.unbindTexture()}U.depthBuffer&&Dt(U)}function Nt(U){let v=U.textures;for(let $=0,ot=v.length;$<ot;$++){let ht=v[$];if(g(ht)){let At=F(U),Lt=i.get(ht).__webglTexture;e.bindTexture(At,Lt),P(At),e.unbindTexture()}}}let re=[],ge=[];function _e(U){if(U.samples>0){if(Oe(U)===!1){let v=U.textures,$=U.width,ot=U.height,ht=n.COLOR_BUFFER_BIT,At=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Lt=i.get(U),ft=v.length>1;if(ft)for(let It=0;It<v.length;It++)e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);let pt=U.texture.mipmaps;pt&&pt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let It=0;It<v.length;It++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ht|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ht|=n.STENCIL_BUFFER_BIT)),ft){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Lt.__webglColorRenderbuffer[It]);let Yt=i.get(v[It]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Yt,0)}n.blitFramebuffer(0,0,$,ot,0,0,$,ot,ht,n.NEAREST),u===!0&&(re.length=0,ge.length=0,re.push(n.COLOR_ATTACHMENT0+It),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(re.push(At),ge.push(At),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ge)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let It=0;It<v.length;It++){e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.RENDERBUFFER,Lt.__webglColorRenderbuffer[It]);let Yt=i.get(v[It]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.TEXTURE_2D,Yt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&u){let v=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function oe(U){return Math.min(s.maxSamples,U.samples)}function Oe(U){let v=i.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function H(U){let v=o.render.frame;m.get(U)!==v&&(m.set(U,v),U.update())}function He(U,v){let $=U.colorSpace,ot=U.format,ht=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==lo&&$!==Yi&&(Ae.getTransfer($)===Ue?(ot!==ti||ht!==Xn)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):he("WebGLTextures: Unsupported texture color space:",$)),v}function Me(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=j,this.getTextureUnits=k,this.setTextureUnits=et,this.setTexture2D=tt,this.setTexture2DArray=Z,this.setTexture3D=it,this.setTextureCube=rt,this.rebindTextures=ct,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function jb(n,t){function e(i,s=Yi){let r,o=Ae.getTransfer(s);if(i===Xn)return n.UNSIGNED_BYTE;if(i===Ul)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===du)return n.BYTE;if(i===pu)return n.SHORT;if(i===Er)return n.UNSIGNED_SHORT;if(i===Nl)return n.INT;if(i===fi)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===pi)return n.HALF_FLOAT;if(i===xu)return n.ALPHA;if(i===yu)return n.RGB;if(i===ti)return n.RGBA;if(i===Ti)return n.DEPTH_COMPONENT;if(i===Ms)return n.DEPTH_STENCIL;if(i===_u)return n.RED;if(i===Ol)return n.RED_INTEGER;if(i===bs)return n.RG;if(i===zl)return n.RG_INTEGER;if(i===Bl)return n.RGBA_INTEGER;if(i===Lo||i===Do||i===No||i===Uo)if(o===Ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Do)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kl||i===Vl||i===Hl||i===Gl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wl||i===Xl||i===ql||i===Yl||i===$l||i===Fo||i===Zl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Wl||i===Xl)return o===Ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ql)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Yl)return r.COMPRESSED_R11_EAC;if(i===$l)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Fo)return r.COMPRESSED_RG11_EAC;if(i===Zl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Jl||i===Kl||i===jl||i===Ql||i===tc||i===ec||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Jl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ql)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ec)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ic)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===oc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ac)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hc||i===uc||i===fc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===hc)return o===Ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dc||i===pc||i===Oo||i===mc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===dc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Tr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Qb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Xu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new So(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new bn({vertexShader:Qb,fragmentShader:tS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new Ao(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qu=class extends Ci{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",u=1,h=null,m=null,f=null,d=null,x=null,p=null,M=typeof XRWebGLBinding<"u",y=new Xu,g={},P=e.getContextAttributes(),F=null,E=null,C=[],w=[],D=new be,b=null,R=null,N=new vn;N.viewport=new Ze;let O=new vn;O.viewport=new Ze;let J=[N,O],j=new Rl,k=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Y=C[W];return Y===void 0&&(Y=new Mr,C[W]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(W){let Y=C[W];return Y===void 0&&(Y=new Mr,C[W]=Y),Y.getGripSpace()},this.getHand=function(W){let Y=C[W];return Y===void 0&&(Y=new Mr,C[W]=Y),Y.getHandSpace()};function B(W){let Y=w.indexOf(W.inputSource);if(Y===-1)return;let ut=C[Y];ut!==void 0&&(ut.update(W.inputSource,W.frame,h||o),ut.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",tt);for(let W=0;W<C.length;W++){let Y=w[W];Y!==null&&(w[W]=null,C[W].disconnect(Y))}k=null,et=null,y.reset();for(let W in g)delete g[W];if(t.setRenderTarget(F),x=null,d=null,f=null,s=null,E=null,Ft.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(D.width,D.height,!1),R!==null){let W=R.camera;W.fov=R.fov,W.zoom=R.zoom,W.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(W){h=W},this.getBaseLayer=function(){return d!==null?d:x},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(F=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",q),s.addEventListener("inputsourceschange",tt),P.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(D),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,mt=null,_t=null;P.depth&&(_t=P.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=P.stencil?Ms:Ti,mt=P.stencil?Tr:fi);let Pt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Dn(d.textureWidth,d.textureHeight,{format:ti,type:Xn,depthTexture:new ps(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ut={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),E=new Dn(x.framebufferWidth,x.framebufferHeight,{format:ti,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(u),h=null,o=await s.requestReferenceSpace(a),Ft.setContext(s),Ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function tt(W){for(let Y=0;Y<W.removed.length;Y++){let ut=W.removed[Y],mt=w.indexOf(ut);mt>=0&&(w[mt]=null,C[mt].disconnect(ut))}for(let Y=0;Y<W.added.length;Y++){let ut=W.added[Y],mt=w.indexOf(ut);if(mt===-1){for(let Pt=0;Pt<C.length;Pt++)if(Pt>=w.length){w.push(ut),mt=Pt;break}else if(w[Pt]===null){w[Pt]=ut,mt=Pt;break}if(mt===-1)break}let _t=C[mt];_t&&_t.connect(ut)}}let Z=new Q,it=new Q;function rt(W,Y,ut){Z.setFromMatrixPosition(Y.matrixWorld),it.setFromMatrixPosition(ut.matrixWorld);let mt=Z.distanceTo(it),_t=Y.projectionMatrix.elements,Pt=ut.projectionMatrix.elements,le=_t[14]/(_t[10]-1),Dt=_t[14]/(_t[10]+1),ct=(_t[9]+1)/_t[5],Qt=(_t[9]-1)/_t[5],Nt=(_t[8]-1)/_t[0],re=(Pt[8]+1)/Pt[0],ge=le*Nt,_e=le*re,oe=mt/(-Nt+re),Oe=oe*-Nt;if(Y.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Oe),W.translateZ(oe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),_t[10]===-1)W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let H=le+oe,He=Dt+oe,Me=ge-Oe,U=_e+(mt-Oe),v=ct*Dt/He*H,$=Qt*Dt/He*H;W.projectionMatrix.makePerspective(Me,U,v,$,H,He),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function St(W,Y){Y===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Y.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let Y=W.near,ut=W.far;y.texture!==null&&(y.depthNear>0&&(Y=y.depthNear),y.depthFar>0&&(ut=y.depthFar)),j.near=O.near=N.near=Y,j.far=O.far=N.far=ut,(k!==j.near||et!==j.far)&&(s.updateRenderState({depthNear:j.near,depthFar:j.far}),k=j.near,et=j.far),j.layers.mask=W.layers.mask|6,N.layers.mask=j.layers.mask&-5,O.layers.mask=j.layers.mask&-3;let mt=W.parent,_t=j.cameras;St(j,mt);for(let Pt=0;Pt<_t.length;Pt++)St(_t[Pt],mt);_t.length===2?rt(j,N,O):j.projectionMatrix.copy(N.projectionMatrix),R===null&&W.isPerspectiveCamera&&(R={camera:W,fov:W.fov,zoom:W.zoom}),Ct(W,j,mt)};function Ct(W,Y,ut){ut===null?W.matrix.copy(Y.matrixWorld):(W.matrix.copy(ut.matrixWorld),W.matrix.invert(),W.matrix.multiply(Y.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=rl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(d===null&&x===null))return u},this.setFoveation=function(W){u=W,d!==null&&(d.fixedFoveation=W),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(W){return g[W]};let Gt=null;function qt(W,Y){if(m=Y.getViewerPose(h||o),p=Y,m!==null){let ut=m.views;x!==null&&(t.setRenderTargetFramebuffer(E,x.framebuffer),t.setRenderTarget(E));let mt=!1;ut.length!==j.cameras.length&&(j.cameras.length=0,mt=!0);for(let Dt=0;Dt<ut.length;Dt++){let ct=ut[Dt],Qt=null;if(x!==null)Qt=x.getViewport(ct);else{let re=f.getViewSubImage(d,ct);Qt=re.viewport,Dt===0&&(t.setRenderTargetTextures(E,re.colorTexture,re.depthStencilTexture),t.setRenderTarget(E))}let Nt=J[Dt];Nt===void 0&&(Nt=new vn,Nt.layers.enable(Dt),Nt.viewport=new Ze,J[Dt]=Nt),Nt.matrix.fromArray(ct.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(ct.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Dt===0&&(j.matrix.copy(Nt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),mt===!0&&j.cameras.push(Nt)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=i.getBinding();let Dt=f.getDepthInformation(ut[0]);Dt&&Dt.isValid&&Dt.texture&&y.init(Dt,s.renderState)}if(_t&&_t.includes("camera-access")&&M){t.state.unbindTexture(),f=i.getBinding();for(let Dt=0;Dt<ut.length;Dt++){let ct=ut[Dt].camera;if(ct){let Qt=g[ct];Qt||(Qt=new So,g[ct]=Qt);let Nt=f.getCameraImage(ct);Qt.sourceTexture=Nt}}}}for(let ut=0;ut<C.length;ut++){let mt=w[ut],_t=C[ut];mt!==null&&_t!==void 0&&_t.update(mt,Y,h||o)}Gt&&Gt(W,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),p=null}let Ft=new km;Ft.setAnimationLoop(qt),this.setAnimationLoop=function(W){Gt=W},this.dispose=function(){}}},eS=new $e,qm=new pe;qm.set(-1,0,0,0,1,0,0,0,1);function nS(n,t){function e(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function i(y,g){g.color.getRGB(y.fogColor.value,Su(n)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function s(y,g,P,F,E){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(y,g):g.isMeshLambertMaterial?(r(y,g),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(y,g),f(y,g)):g.isMeshPhongMaterial?(r(y,g),m(y,g),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(y,g),d(y,g),g.isMeshPhysicalMaterial&&x(y,g,E)):g.isMeshMatcapMaterial?(r(y,g),p(y,g)):g.isMeshDepthMaterial?r(y,g):g.isMeshDistanceMaterial?(r(y,g),M(y,g)):g.isMeshNormalMaterial?r(y,g):g.isLineBasicMaterial?(o(y,g),g.isLineDashedMaterial&&a(y,g)):g.isPointsMaterial?u(y,g,P,F):g.isSpriteMaterial?h(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,e(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,e(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,e(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Pn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,e(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Pn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,e(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,e(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);let P=t.get(g),F=P.envMap,E=P.envMapRotation;F&&(y.envMap.value=F,y.envMapRotation.value.setFromMatrix4(eS.makeRotationFromEuler(E)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(qm),y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,y.aoMapTransform))}function o(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,e(g.map,y.mapTransform))}function a(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function u(y,g,P,F){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*P,y.scale.value=F*.5,g.map&&(y.map.value=g.map,e(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,e(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function h(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,e(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,e(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function f(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function d(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function x(y,g,P){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Pn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.retroreflectivity>0&&(y.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,y.specularIntensityMapTransform))}function p(y,g){g.matcap&&(y.matcap.value=g.matcap)}function M(y,g){let P=t.get(g).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function iS(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function u(E,C){let w=C.program;i.uniformBlockBinding(E,w)}function h(E,C){let w=s[E.id];w===void 0&&(y(E),w=m(E),s[E.id]=w,E.addEventListener("dispose",P));let D=C.program;i.updateUBOMapping(E,D);let b=t.render.frame;r[E.id]!==b&&(d(E),r[E.id]=b)}function m(E){let C=f();E.__bindingPointIndex=C;let w=n.createBuffer(),D=E.__size,b=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,D,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,w),w}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return he("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let C=s[E.id],w=E.uniforms,D=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let b=0,R=w.length;b<R;b++){let N=w[b];if(Array.isArray(N))for(let O=0,J=N.length;O<J;O++)x(N[O],b,O,D);else x(N,b,0,D)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(E,C,w,D){if(M(E,C,w,D)===!0){let b=E.__offset,R=E.value;if(Array.isArray(R)){let N=0;for(let O=0;O<R.length;O++){let J=R[O],j=g(J);p(J,E.__data,N),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(N+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(R,E.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,b,E.__data)}}function p(E,C,w){typeof E=="number"||typeof E=="boolean"?C[0]=E:E.isMatrix3?(C[0]=E.elements[0],C[1]=E.elements[1],C[2]=E.elements[2],C[3]=0,C[4]=E.elements[3],C[5]=E.elements[4],C[6]=E.elements[5],C[7]=0,C[8]=E.elements[6],C[9]=E.elements[7],C[10]=E.elements[8],C[11]=0):ArrayBuffer.isView(E)?C.set(new E.constructor(E.buffer,E.byteOffset,C.length)):E.toArray(C,w)}function M(E,C,w,D){let b=E.value,R=C+"_"+w;if(D[R]===void 0)return typeof b=="number"||typeof b=="boolean"?D[R]=b:ArrayBuffer.isView(b)?D[R]=b.slice():D[R]=b.clone(),!0;{let N=D[R];if(typeof b=="number"||typeof b=="boolean"){if(N!==b)return D[R]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(N.equals(b)===!1)return N.copy(b),!0}}return!1}function y(E){let C=E.uniforms,w=0,D=16;for(let R=0,N=C.length;R<N;R++){let O=Array.isArray(C[R])?C[R]:[C[R]];for(let J=0,j=O.length;J<j;J++){let k=O[J],et=Array.isArray(k.value)?k.value:[k.value];for(let B=0,q=et.length;B<q;B++){let tt=et[B],Z=g(tt),it=w%D,rt=it%Z.boundary,St=it+rt;w+=rt,St!==0&&D-St<Z.storage&&(w+=D-St),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=Z.storage}}}let b=w%D;return b>0&&(w+=D-b),E.__size=w,E.__cache={},this}function g(E){let C={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(C.boundary=4,C.storage=4):E.isVector2?(C.boundary=8,C.storage=8):E.isVector3||E.isColor?(C.boundary=16,C.storage=12):E.isVector4?(C.boundary=16,C.storage=16):E.isMatrix3?(C.boundary=48,C.storage=48):E.isMatrix4?(C.boundary=64,C.storage=64):E.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(C.boundary=16,C.storage=E.byteLength):ae("WebGLRenderer: Unsupported uniform value type.",E),C}function P(E){let C=E.target;C.removeEventListener("dispose",P);let w=o.indexOf(C.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function F(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:u,update:h,dispose:F}}var sS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Li=null;function rS(){return Li===null&&(Li=new hl(sS,16,16,bs,pi),Li.name="DFG_LUT",Li.minFilter=an,Li.magFilter=an,Li.wrapS=Ei,Li.wrapT=Ei,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}var bc=class{constructor(t={}){let{canvas:e=hm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:x=Xn}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let M=x,y=new Set([Bl,zl,Ol]),g=new Set([Xn,fi,Er,Tr,Ul,Fl]),P=new Uint32Array(4),F=new Int32Array(4),E=new Q,C=null,w=null,D=[],b=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,O=!1,J=null,j=null,k=null,et=null;this._outputColorSpace=en;let B=0,q=0,tt=null,Z=-1,it=null,rt=new Ze,St=new Ze,Ct=null,Gt=new ue(0),qt=0,Ft=e.width,W=e.height,Y=1,ut=null,mt=null,_t=new Ze(0,0,Ft,W),Pt=new Ze(0,0,Ft,W),le=!1,Dt=new vo,ct=!1,Qt=!1,Nt=new $e,re=new Q,ge=new Ze,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},oe=!1;function Oe(){return tt===null?Y:1}let H=i;function He(T,V){return e.getContext(T,V)}let Me,U,v,$,ot,ht,At,Lt,ft,pt,It,Yt,Ot,Ut,te,se,fe,G,wt,dt,Et,Rt,xt;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ze,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",En,!1),H===null){let V="webgl2";if(H=He(V,T),H===null)throw He(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ee()}catch(T){throw e.removeEventListener("webglcontextlost",ze,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",En,!1),he("WebGLRenderer: "+T.message),T}function ee(){Me=new fM(H),Me.init(),Et=new jb(H,Me),U=new nM(H,Me,t,Et),v=new Jb(H,Me),U.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),j=H.createFramebuffer(),k=H.createFramebuffer(),et=H.createFramebuffer(),$=new mM(H),ot=new Fb,ht=new Kb(H,Me,v,ot,U,Et,$),At=new uM(N),Lt=new xy(H),Rt=new tM(H,Lt),ft=new dM(H,Lt,$,Rt),pt=new xM(H,ft,Lt,Rt,$),G=new gM(H,U,ht),te=new iM(ot),It=new Ub(N,At,Me,U,Rt,te),Yt=new nS(N,ot),Ot=new zb,Ut=new Wb(Me),fe=new Qv(N,At,v,pt,p,u),se=new Zb(N,pt,U),xt=new iS(H,$,U,v),wt=new eM(H,Me,$),dt=new pM(H,Me,$),$.programs=It.programs,N.capabilities=U,N.extensions=Me,N.properties=ot,N.renderLists=Ot,N.shadowMap=se,N.state=v,N.info=$}M!==Xn&&(R=new _M(M,e.width,e.height,a,s,r));let $t=new qu(N,H);this.xr=$t,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let T=Me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(Ft,W,!1))},this.getSize=function(T){return T.set(Ft,W)},this.setSize=function(T,V,lt=!0){if($t.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}Ft=T,W=V,e.width=Math.floor(T*Y),e.height=Math.floor(V*Y),lt===!0&&(e.style.width=T+"px",e.style.height=V+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(Ft*Y,W*Y).floor()},this.setDrawingBufferSize=function(T,V,lt){Ft=T,W=V,Y=lt,e.width=Math.floor(T*lt),e.height=Math.floor(V*lt),this.setViewport(0,0,T,V)},this.setEffects=function(T){if(M===Xn){he("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let V=0;V<T.length;V++)if(T[V].isOutputPass===!0){ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(rt)},this.getViewport=function(T){return T.copy(_t)},this.setViewport=function(T,V,lt,nt){T.isVector4?_t.set(T.x,T.y,T.z,T.w):_t.set(T,V,lt,nt),v.viewport(rt.copy(_t).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(Pt)},this.setScissor=function(T,V,lt,nt){T.isVector4?Pt.set(T.x,T.y,T.z,T.w):Pt.set(T,V,lt,nt),v.scissor(St.copy(Pt).multiplyScalar(Y).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(T){v.setScissorTest(le=T)},this.setOpaqueSort=function(T){ut=T},this.setTransparentSort=function(T){mt=T},this.getClearColor=function(T){return T.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(T=!0,V=!0,lt=!0){let nt=0;if(T){let X=!1;if(tt!==null){let Bt=tt.texture.format;X=y.has(Bt)}if(X){let Bt=tt.texture.type,Xt=g.has(Bt),zt=fe.getClearColor(),Kt=fe.getClearAlpha(),Wt=zt.r,de=zt.g,ye=zt.b;Xt?(P[0]=Wt,P[1]=de,P[2]=ye,P[3]=Kt,H.clearBufferuiv(H.COLOR,0,P)):(F[0]=Wt,F[1]=de,F[2]=ye,F[3]=Kt,H.clearBufferiv(H.COLOR,0,F))}else nt|=H.COLOR_BUFFER_BIT}V&&(nt|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),lt&&(nt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&H.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),J=T},this.dispose=function(){e.removeEventListener("webglcontextlost",ze,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",En,!1),fe.dispose(),Ot.dispose(),Ut.dispose(),ot.dispose(),At.dispose(),pt.dispose(),Rt.dispose(),xt.dispose(),It.dispose(),$t.dispose(),$t.removeEventListener("sessionstart",ii),$t.removeEventListener("sessionend",ts),gt.stop()};function ze(T){T.preventDefault(),fo("WebGLRenderer: Context Lost."),O=!0}function Se(){fo("WebGLRenderer: Context Restored."),O=!1;let T=$.autoReset,V=se.enabled,lt=se.autoUpdate,nt=se.needsUpdate,X=se.type;ee(),$.autoReset=T,se.enabled=V,se.autoUpdate=lt,se.needsUpdate=nt,se.type=X}function En(T){he("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function On(T){let V=T.target;V.removeEventListener("dispose",On),eh(V)}function eh(T){nh(T),ot.remove(T)}function nh(T){let V=ot.get(T).programs;V!==void 0&&(V.forEach(function(lt){It.releaseProgram(lt)}),T.isShaderMaterial&&It.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,lt,nt,X,Bt){V===null&&(V=_e);let Xt=X.isMesh&&X.matrixWorld.determinantAffine()<0,zt=ih(T,V,lt,nt,X);v.setMaterial(nt,Xt);let Kt=lt.index,Wt=1;if(nt.wireframe===!0){if(Kt=ft.getWireframeAttribute(lt),Kt===void 0)return;Wt=2}let de=lt.drawRange,ye=lt.attributes.position,Zt=de.start*Wt,Ie=(de.start+de.count)*Wt;Bt!==null&&(Zt=Math.max(Zt,Bt.start*Wt),Ie=Math.min(Ie,(Bt.start+Bt.count)*Wt)),Kt!==null?(Zt=Math.max(Zt,0),Ie=Math.min(Ie,Kt.count)):ye!=null&&(Zt=Math.max(Zt,0),Ie=Math.min(Ie,ye.count));let Ge=Ie-Zt;if(Ge<0||Ge===1/0)return;Rt.setup(X,nt,zt,lt,Kt);let Ve,Fe=wt;if(Kt!==null&&(Ve=Lt.get(Kt),Fe=dt,Fe.setIndex(Ve)),X.isMesh)nt.wireframe===!0?(v.setLineWidth(nt.wireframeLinewidth*Oe()),Fe.setMode(H.LINES)):Fe.setMode(H.TRIANGLES);else if(X.isLine){let nn=nt.linewidth;nn===void 0&&(nn=1),v.setLineWidth(nn*Oe()),X.isLineSegments?Fe.setMode(H.LINES):X.isLineLoop?Fe.setMode(H.LINE_LOOP):Fe.setMode(H.LINE_STRIP)}else X.isPoints?Fe.setMode(H.POINTS):X.isSprite&&Fe.setMode(H.TRIANGLES);if(X.isBatchedMesh)if(Me.get("WEBGL_multi_draw"))Fe.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let nn=X._multiDrawStarts,Ht=X._multiDrawCounts,tn=X._multiDrawCount,Ee=Kt?Lt.get(Kt).bytesPerElement:1,Tn=ot.get(nt).currentProgram.getUniforms();for(let Zn=0;Zn<tn;Zn++)Tn.setValue(H,"_gl_DrawID",Zn),Fe.render(nn[Zn]/Ee,Ht[Zn])}else if(X.isInstancedMesh)Fe.renderInstances(Zt,Ge,X.count);else if(lt.isInstancedBufferGeometry){let nn=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Ht=Math.min(lt.instanceCount,nn);Fe.renderInstances(Zt,Ge,Ht)}else Fe.render(Zt,Ge)};function Qi(T,V,lt,nt){J!==null&&T.isNodeMaterial&&J.setObject(nt,T),ct===!0&&te.setState(T,lt,!1),T.transparent===!0&&T.side===Qn&&T.forceSinglePass===!1?(T.side=Pn,T.needsUpdate=!0,Cs(T,V,nt),T.side=ys,T.needsUpdate=!0,Cs(T,V,nt),T.side=Qn):Cs(T,V,nt)}this.compile=function(T,V,lt=null){lt===null&&(lt=T),J!==null&&J.renderStart(T,V,lt),w=Ut.get(lt),w.init(V),b.push(w),lt.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),T!==lt&&T.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights(),J!==null&&J.updateLights(w.state.lightsArray),Qt=this.localClippingEnabled,ct=te.init(this.clippingPlanes,Qt),ct===!0&&te.setGlobalState(this.clippingPlanes,V),J!==null&&se.render(w.state.shadowsArray,lt,V);let nt=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Bt=X.material;if(Bt)if(Array.isArray(Bt))for(let Xt=0;Xt<Bt.length;Xt++){let zt=Bt[Xt];Qi(zt,lt,V,X),nt.add(zt)}else Qi(Bt,lt,V,X),nt.add(Bt)}),w=b.pop(),J!==null&&J.renderEnd(),nt},this.compileAsync=function(T,V,lt=null){let nt=this.compile(T,V,lt);return new Promise(X=>{function Bt(){if(nt.forEach(function(Xt){let Kt=ot.get(Xt).currentProgram;(Kt===void 0||Kt.isReady())&&nt.delete(Xt)}),nt.size===0){X(T);return}setTimeout(Bt,10)}Me.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Ts=null;function Ys(T){Ts&&Ts(T)}function ii(){gt.stop()}function ts(){gt.start()}let gt=new km;gt.setAnimationLoop(Ys),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(T){Ts=T,$t.setAnimationLoop(T),T===null?gt.stop():gt.start()},$t.addEventListener("sessionstart",ii),$t.addEventListener("sessionend",ts),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){he("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;J!==null&&J.renderStart(T,V);let lt=$t.enabled===!0&&$t.isPresenting===!0,nt=R!==null&&(tt===null||lt)&&R.begin(N,tt);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),$t.enabled===!0&&$t.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&($t.cameraAutoUpdate===!0&&$t.updateCamera(V),V=$t.getCamera()),T.isScene===!0&&T.onBeforeRender(N,T,V,tt),w=Ut.get(T,b.length),w.init(V),w.state.textureUnits=ht.getTextureUnits(),b.push(w),Nt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Dt.setFromProjectionMatrix(Nt,hi,V.reversedDepth),Qt=this.localClippingEnabled,ct=te.init(this.clippingPlanes,Qt),C=Ot.get(T,D.length),C.init(),D.push(C),$t.enabled===!0&&$t.isPresenting===!0){let Xt=N.xr.getDepthSensingMesh();Xt!==null&&vt(Xt,V,-1/0,N.sortObjects)}vt(T,V,0,N.sortObjects),C.finish(),J!==null&&J.updateLights(w.state.lightsArray),N.sortObjects===!0&&C.sort(ut,mt),oe=$t.enabled===!1||$t.isPresenting===!1||$t.hasDepthSensing()===!1,oe&&fe.addToRenderList(C,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&te.beginShadows();let X=w.state.shadowsArray;if(se.render(X,T,V),ct===!0&&te.endShadows(),(nt&&R.hasRenderPass())===!1){let Xt=C.opaque,zt=C.transmissive;if(w.setupLights(),V.isArrayCamera){let Kt=V.cameras;if(zt.length>0)for(let Wt=0,de=Kt.length;Wt<de;Wt++){let ye=Kt[Wt];xe(Xt,zt,T,ye)}oe&&fe.render(T);for(let Wt=0,de=Kt.length;Wt<de;Wt++){let ye=Kt[Wt];la(C,T,ye,ye.viewport)}}else zt.length>0&&xe(Xt,zt,T,V),oe&&fe.render(T),la(C,T,V)}tt!==null&&q===0&&(ht.updateMultisampleRenderTarget(tt),ht.updateRenderTargetMipmap(tt)),nt&&R.end(N),T.isScene===!0&&T.onAfterRender(N,T,V),Rt.resetDefaultState(),Z=-1,it=null,b.pop(),b.length>0?(w=b[b.length-1],ht.setTextureUnits(w.state.textureUnits),ct===!0&&te.setGlobalState(N.clippingPlanes,w.state.camera)):w=null,D.pop(),D.length>0?C=D[D.length-1]:C=null,J!==null&&J.renderEnd()};function vt(T,V,lt,nt){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)lt=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(Dt)){nt&&ge.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Nt);let Xt=pt.update(T),zt=T.material;zt.visible&&C.push(T,Xt,zt,lt,ge.z,null,V)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(Dt))){let Xt=pt.update(T),zt=T.material;if(nt&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ge.copy(T.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),ge.copy(Xt.boundingSphere.center)),ge.applyMatrix4(T.matrixWorld).applyMatrix4(Nt)),Array.isArray(zt)){let Kt=Xt.groups;for(let Wt=0,de=Kt.length;Wt<de;Wt++){let ye=Kt[Wt],Zt=zt[ye.materialIndex];Zt&&Zt.visible&&C.push(T,Xt,Zt,lt,ge.z,ye,V)}}else zt.visible&&C.push(T,Xt,zt,lt,ge.z,null,V)}}let Bt=T.children;for(let Xt=0,zt=Bt.length;Xt<zt;Xt++)vt(Bt[Xt],V,lt,nt)}function la(T,V,lt,nt){let{opaque:X,transmissive:Bt,transparent:Xt}=T;w.setupLightsView(lt),ct===!0&&te.setGlobalState(N.clippingPlanes,lt),nt&&v.viewport(rt.copy(nt)),X.length>0&&si(X,V,lt),Bt.length>0&&si(Bt,V,lt),Xt.length>0&&si(Xt,V,lt),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function xe(T,V,lt,nt){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[nt.id]===void 0){let Zt=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[nt.id]=new Dn(1,1,{generateMipmaps:!0,type:Zt?pi:Xn,minFilter:vs,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ae.workingColorSpace})}let Bt=w.state.transmissionRenderTarget[nt.id],Xt=nt.viewport||rt;Bt.setSize(Xt.z*N.transmissionResolutionScale,Xt.w*N.transmissionResolutionScale);let zt=N.getRenderTarget(),Kt=N.getActiveCubeFace(),Wt=N.getActiveMipmapLevel();N.setRenderTarget(Bt),N.getClearColor(Gt),qt=N.getClearAlpha(),qt<1&&N.setClearColor(16777215,.5),N.clear(),oe&&fe.render(lt);let de=N.toneMapping;N.toneMapping=ui;let ye=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),w.setupLightsView(nt),ct===!0&&te.setGlobalState(N.clippingPlanes,nt),si(T,lt,nt),ht.updateMultisampleRenderTarget(Bt),ht.updateRenderTargetMipmap(Bt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ie=0,Ge=V.length;Ie<Ge;Ie++){let Ve=V[Ie],{object:Fe,geometry:nn,material:Ht,group:tn}=Ve;if(Ht.side===Qn&&Fe.layers.test(nt.layers)){let Ee=Ht.side;Ht.side=Pn,Ht.needsUpdate=!0,zi(Fe,lt,nt,nn,Ht,tn),Ht.side=Ee,Ht.needsUpdate=!0,Zt=!0}}Zt===!0&&(ht.updateMultisampleRenderTarget(Bt),ht.updateRenderTargetMipmap(Bt))}N.setRenderTarget(zt,Kt,Wt),N.setClearColor(Gt,qt),ye!==void 0&&(nt.viewport=ye),N.toneMapping=de}function si(T,V,lt){let nt=V.isScene===!0?V.overrideMaterial:null;for(let X=0,Bt=T.length;X<Bt;X++){let Xt=T[X],{object:zt,geometry:Kt,group:Wt}=Xt,de=Xt.material;de.allowOverride===!0&&nt!==null&&(de=nt),zt.layers.test(lt.layers)&&zi(zt,V,lt,Kt,de,Wt)}}function zi(T,V,lt,nt,X,Bt){J!==null&&X.isNodeMaterial&&J.setObject(T,X),T.onBeforeRender(N,V,lt,nt,X,Bt),T.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(N,V,lt,nt,T,Bt),X.transparent===!0&&X.side===Qn&&X.forceSinglePass===!1?(X.side=Pn,X.needsUpdate=!0,N.renderBufferDirect(lt,V,nt,X,T,Bt),X.side=ys,X.needsUpdate=!0,N.renderBufferDirect(lt,V,nt,X,T,Bt),X.side=Qn):N.renderBufferDirect(lt,V,nt,X,T,Bt),T.onAfterRender(N,V,lt,nt,X,Bt)}function Cs(T,V,lt){V.isScene!==!0&&(V=_e);let nt=ot.get(T),X=w.state.lights,Bt=w.state.shadowsArray,Xt=X.state.version,zt=It.getParameters(T,X.state,Bt,V,lt,w.state.lightProbeGridArray),Kt=It.getProgramCacheKey(zt),Wt=nt.programs;nt.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,nt.fog=V.fog;let de=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;nt.envMap=At.get(T.envMap||nt.environment,de),nt.envMapRotation=nt.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Wt===void 0&&(T.addEventListener("dispose",On),Wt=new Map,nt.programs=Wt);let ye=Wt.get(Kt);if(ye!==void 0){if(nt.currentProgram===ye&&nt.lightsStateVersion===Xt)return ca(T,zt),ye}else zt.uniforms=It.getUniforms(T),J!==null&&T.isNodeMaterial&&J.build(T,lt,zt),T.onBeforeCompile(zt,N),ye=It.acquireProgram(zt,Kt),Wt.set(Kt,ye),nt.uniforms=zt.uniforms;let Zt=nt.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Zt.clippingPlanes=te.uniform),ca(T,zt),nt.needsLights=Ln(T),nt.lightsStateVersion=Xt,nt.needsLights&&(Zt.ambientLightColor.value=X.state.ambient,Zt.lightProbe.value=X.state.probe,Zt.sunLights.value=X.state.sun,Zt.sunLightShadows.value=X.state.sunShadow,Zt.directionalLights.value=X.state.directional,Zt.directionalLightShadows.value=X.state.directionalShadow,Zt.spotLights.value=X.state.spot,Zt.spotLightShadows.value=X.state.spotShadow,Zt.rectAreaLights.value=X.state.rectArea,Zt.ltc_1.value=X.state.rectAreaLTC1,Zt.ltc_2.value=X.state.rectAreaLTC2,Zt.pointLights.value=X.state.point,Zt.pointLightShadows.value=X.state.pointShadow,Zt.hemisphereLights.value=X.state.hemi,Zt.sunShadowMatrix.value=X.state.sunShadowMatrix,Zt.sunShadowCascade.value=X.state.sunShadowCascade,Zt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Zt.spotLightMatrix.value=X.state.spotLightMatrix,Zt.spotLightMap.value=X.state.spotLightMap,Zt.pointShadowMatrix.value=X.state.pointShadowMatrix),nt.lightProbeGrid=w.state.lightProbeGridArray.length>0,nt.currentProgram=ye,nt.uniformsList=null,ye}function $s(T){if(T.uniformsList===null){let V=T.currentProgram.getUniforms();T.uniformsList=Ir.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function ca(T,V){let lt=ot.get(T);lt.outputColorSpace=V.outputColorSpace,lt.batching=V.batching,lt.batchingColor=V.batchingColor,lt.instancing=V.instancing,lt.instancingColor=V.instancingColor,lt.instancingMorph=V.instancingMorph,lt.skinning=V.skinning,lt.morphTargets=V.morphTargets,lt.morphNormals=V.morphNormals,lt.morphColors=V.morphColors,lt.morphTargetsCount=V.morphTargetsCount,lt.numClippingPlanes=V.numClippingPlanes,lt.numIntersection=V.numClipIntersection,lt.vertexAlphas=V.vertexAlphas,lt.vertexTangents=V.vertexTangents,lt.toneMapping=V.toneMapping}function ha(T,V){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;E.setFromMatrixPosition(V.matrixWorld);for(let lt=0,nt=T.length;lt<nt;lt++){let X=T[lt];if(X.texture!==null&&X.boundingBox.containsPoint(E))return X}return null}function ih(T,V,lt,nt,X){V.isScene!==!0&&(V=_e),ht.resetTextureUnits();let Bt=V.fog,Xt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?V.environment:null,zt=tt===null?N.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Ae.workingColorSpace,Kt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Wt=At.get(nt.envMap||Xt,Kt),de=nt.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ye=!!lt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Zt=!!lt.morphAttributes.position,Ie=!!lt.morphAttributes.normal,Ge=!!lt.morphAttributes.color,Ve=ui;nt.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ve=N.toneMapping);let Fe=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,nn=Fe!==void 0?Fe.length:0,Ht=ot.get(nt),tn=w.state.lights;if(ct===!0&&(Qt===!0||T!==it)){let Be=T===it&&nt.id===Z;te.setState(nt,T,Be)}let Ee=!1;nt.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==tn.state.version||Ht.outputColorSpace!==zt||X.isBatchedMesh&&Ht.batching===!1||!X.isBatchedMesh&&Ht.batching===!0||X.isBatchedMesh&&Ht.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ht.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ht.instancing===!1||!X.isInstancedMesh&&Ht.instancing===!0||X.isSkinnedMesh&&Ht.skinning===!1||!X.isSkinnedMesh&&Ht.skinning===!0||X.isInstancedMesh&&Ht.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ht.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ht.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ht.instancingMorph===!1&&X.morphTexture!==null||Ht.envMap!==Wt||nt.fog===!0&&Ht.fog!==Bt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==te.numPlanes||Ht.numIntersection!==te.numIntersection)||Ht.vertexAlphas!==de||Ht.vertexTangents!==ye||Ht.morphTargets!==Zt||Ht.morphNormals!==Ie||Ht.morphColors!==Ge||Ht.toneMapping!==Ve||Ht.morphTargetsCount!==nn||!!Ht.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Ee=!0):(Ee=!0,Ht.__version=nt.version);let Tn=Ht.currentProgram;Ee===!0&&(Tn=Cs(nt,V,X),J&&nt.isNodeMaterial&&J.onUpdateProgram(nt,Tn,Ht));let Zn=!1,zn=!1,ri=!1,De=Tn.getUniforms(),Ye=Ht.uniforms;if(v.useProgram(Tn.program)&&(Zn=!0,zn=!0,ri=!0),nt.id!==Z&&(Z=nt.id,zn=!0),Ht.needsLights){let Be=ha(w.state.lightProbeGridArray,X);Ht.lightProbeGrid!==Be&&(Ht.lightProbeGrid=Be,zn=!0)}if(Zn||it!==T){v.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),De.setValue(H,"projectionMatrix",T.projectionMatrix),De.setValue(H,"viewMatrix",T.matrixWorldInverse);let vi=De.map.cameraPosition;vi!==void 0&&vi.setValue(H,re.setFromMatrixPosition(T.matrixWorld)),U.logarithmicDepthBuffer&&De.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&De.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),it!==T&&(it=T,zn=!0,ri=!0)}if(Ht.needsLights&&(tn.state.sunShadowMap.length>0&&De.setValue(H,"sunShadowMap",tn.state.sunShadowMap,ht),tn.state.directionalShadowMap.length>0&&De.setValue(H,"directionalShadowMap",tn.state.directionalShadowMap,ht),tn.state.spotShadowMap.length>0&&De.setValue(H,"spotShadowMap",tn.state.spotShadowMap,ht),tn.state.pointShadowMap.length>0&&De.setValue(H,"pointShadowMap",tn.state.pointShadowMap,ht)),X.isSkinnedMesh){De.setOptional(H,X,"bindMatrix"),De.setOptional(H,X,"bindMatrixInverse");let Be=X.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),De.setValue(H,"boneTexture",Be.boneTexture,ht))}X.isBatchedMesh&&(De.setOptional(H,X,"batchingTexture"),De.setValue(H,"batchingTexture",X._matricesTexture,ht),De.setOptional(H,X,"batchingIdTexture"),De.setValue(H,"batchingIdTexture",X._indirectTexture,ht),De.setOptional(H,X,"batchingColorTexture"),X._colorsTexture!==null&&De.setValue(H,"batchingColorTexture",X._colorsTexture,ht));let Jn=lt.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&G.update(X,lt,Tn),(zn||Ht.receiveShadow!==X.receiveShadow)&&(Ht.receiveShadow=X.receiveShadow,De.setValue(H,"receiveShadow",X.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&V.environment!==null&&(Ye.envMapIntensity.value=V.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=rS()),zn){if(De.setValue(H,"toneMappingExposure",N.toneMappingExposure),Ht.needsLights&&ua(Ye,ri),Bt&&nt.fog===!0&&Yt.refreshFogUniforms(Ye,Bt),Yt.refreshMaterialUniforms(Ye,nt,Y,W,w.state.transmissionRenderTarget[T.id]),Ht.needsLights&&Ht.lightProbeGrid){let Be=Ht.lightProbeGrid;Ye.probesSH.value=Be.texture,Ye.probesMin.value.copy(Be.boundingBox.min),Ye.probesMax.value.copy(Be.boundingBox.max),Ye.probesResolution.value.copy(Be.resolution)}Ir.upload(H,$s(Ht),Ye,ht)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Ir.upload(H,$s(Ht),Ye,ht),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&De.setValue(H,"center",X.center),De.setValue(H,"modelViewMatrix",X.modelViewMatrix),De.setValue(H,"normalMatrix",X.normalMatrix),De.setValue(H,"modelMatrix",X.matrixWorld),nt.uniformsGroups!==void 0){let Be=nt.uniformsGroups;for(let vi=0,Mi=Be.length;vi<Mi;vi++){let es=Be[vi];xt.update(es,Tn),xt.bind(es,Tn)}}return Tn}function ua(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.sunLights.needsUpdate=V,T.sunLightShadows.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function Ln(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(T,V,lt){let nt=ot.get(T);nt.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),ot.get(T.texture).__webglTexture=V,ot.get(T.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:lt,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,V){let lt=ot.get(T);lt.__webglFramebuffer=V,lt.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,lt=0){tt=T,B=V,q=lt;let nt=null,X=!1,Bt=!1;if(T){let zt=ot.get(T);if(zt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(H.FRAMEBUFFER,zt.__webglFramebuffer),rt.copy(T.viewport),St.copy(T.scissor),Ct=T.scissorTest,v.viewport(rt),v.scissor(St),v.setScissorTest(Ct),Z=-1;return}else if(zt.__webglFramebuffer===void 0)ht.setupRenderTarget(T);else if(zt.__hasExternalTextures)ht.rebindTextures(T,ot.get(T.texture).__webglTexture,ot.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let de=T.depthTexture;if(zt.__boundDepthTexture!==de){if(de!==null&&ot.has(de)&&(T.width!==de.image.width||T.height!==de.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(T)}}let Kt=T.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Bt=!0);let Wt=ot.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Wt[V])?nt=Wt[V][lt]:nt=Wt[V],X=!0):T.samples>0&&ht.useMultisampledRTT(T)===!1?nt=ot.get(T).__webglMultisampledFramebuffer:Array.isArray(Wt)?nt=Wt[lt]:nt=Wt,rt.copy(T.viewport),St.copy(T.scissor),Ct=T.scissorTest}else rt.copy(_t).multiplyScalar(Y).floor(),St.copy(Pt).multiplyScalar(Y).floor(),Ct=le;if(lt!==0&&(nt=j),v.bindFramebuffer(H.FRAMEBUFFER,nt)&&v.drawBuffers(T,nt),v.viewport(rt),v.scissor(St),v.setScissorTest(Ct),X){let zt=ot.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+V,zt.__webglTexture,lt)}else if(Bt){let zt=V;for(let Kt=0;Kt<T.textures.length;Kt++){let Wt=ot.get(T.textures[Kt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Kt,Wt.__webglTexture,lt,zt)}}else if(T!==null&&lt!==0){let zt=ot.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,zt.__webglTexture,lt)}Z=-1};function Wr(T){let V=ot.get(T);return(V.__readFormat!==T.format||V.__readType!==T.type)&&(V.__readFormat=T.format,V.__readType=T.type,V.__formatReadable=U.textureFormatReadable(T.format),V.__typeReadable=U.textureTypeReadable(T.type)),V}this.readRenderTargetPixels=function(T,V,lt,nt,X,Bt,Xt,zt=0){if(!(T&&T.isWebGLRenderTarget)){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=ot.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Xt!==void 0&&(Kt=Kt[Xt]),Kt){v.bindFramebuffer(H.FRAMEBUFFER,Kt);try{let Wt=T.textures[zt],de=Wt.format,ye=Wt.type;T.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+zt);let Zt=Wr(Wt);if(Zt.__formatReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Zt.__typeReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-nt&&lt>=0&&lt<=T.height-X&&H.readPixels(V,lt,nt,X,Et.convert(de),Et.convert(ye),Bt)}finally{let Wt=tt!==null?ot.get(tt).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(T,V,lt,nt,X,Bt,Xt,zt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=ot.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Xt!==void 0&&(Kt=Kt[Xt]),Kt)if(V>=0&&V<=T.width-nt&&lt>=0&&lt<=T.height-X){v.bindFramebuffer(H.FRAMEBUFFER,Kt);let Wt=T.textures[zt],de=Wt.format,ye=Wt.type;T.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+zt);let Zt=Wr(Wt);if(Zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ie),H.bufferData(H.PIXEL_PACK_BUFFER,Bt.byteLength,H.STREAM_READ),H.readPixels(V,lt,nt,X,Et.convert(de),Et.convert(ye),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Ge=tt!==null?ot.get(tt).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,Ge);let Ve=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await fm(H,Ve,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ie),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Bt),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Ie),H.deleteSync(Ve),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,V=null,lt=0){let nt=Math.pow(2,-lt),X=Math.floor(T.image.width*nt),Bt=Math.floor(T.image.height*nt),Xt=V!==null?V.x:0,zt=V!==null?V.y:0;ht.setTexture2D(T,0),H.copyTexSubImage2D(H.TEXTURE_2D,lt,0,0,Xt,zt,X,Bt),v.unbindTexture()},this.copyTextureToTexture=function(T,V,lt=null,nt=null,X=0,Bt=0){let Xt,zt,Kt,Wt,de,ye,Zt,Ie,Ge,Ve=T.isCompressedTexture?T.mipmaps[Bt]:T.image;if(lt!==null)Xt=lt.max.x-lt.min.x,zt=lt.max.y-lt.min.y,Kt=lt.isBox3?lt.max.z-lt.min.z:1,Wt=lt.min.x,de=lt.min.y,ye=lt.isBox3?lt.min.z:0;else{let Ye=Math.pow(2,-X);Xt=Math.floor(Ve.width*Ye),zt=Math.floor(Ve.height*Ye),T.isDataArrayTexture?Kt=Ve.depth:T.isData3DTexture?Kt=Math.floor(Ve.depth*Ye):Kt=1,Wt=0,de=0,ye=0}nt!==null?(Zt=nt.x,Ie=nt.y,Ge=nt.z):(Zt=0,Ie=0,Ge=0);let Fe=Et.convert(V.format),nn=Et.convert(V.type),Ht;V.isData3DTexture?(ht.setTexture3D(V,0),Ht=H.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ht.setTexture2DArray(V,0),Ht=H.TEXTURE_2D_ARRAY):(ht.setTexture2D(V,0),Ht=H.TEXTURE_2D),v.activeTexture(H.TEXTURE0),v.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,V.flipY),v.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),v.pixelStorei(H.UNPACK_ALIGNMENT,V.unpackAlignment);let tn=v.getParameter(H.UNPACK_ROW_LENGTH),Ee=v.getParameter(H.UNPACK_IMAGE_HEIGHT),Tn=v.getParameter(H.UNPACK_SKIP_PIXELS),Zn=v.getParameter(H.UNPACK_SKIP_ROWS),zn=v.getParameter(H.UNPACK_SKIP_IMAGES);v.pixelStorei(H.UNPACK_ROW_LENGTH,Ve.width),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ve.height),v.pixelStorei(H.UNPACK_SKIP_PIXELS,Wt),v.pixelStorei(H.UNPACK_SKIP_ROWS,de),v.pixelStorei(H.UNPACK_SKIP_IMAGES,ye);let ri=T.isDataArrayTexture||T.isData3DTexture,De=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){let Ye=ot.get(T),Jn=ot.get(V),Be=ot.get(Ye.__renderTarget),vi=ot.get(Jn.__renderTarget);v.bindFramebuffer(H.READ_FRAMEBUFFER,Be.__webglFramebuffer),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let Mi=0;Mi<Kt;Mi++)ri&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ot.get(T).__webglTexture,X,ye+Mi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ot.get(V).__webglTexture,Bt,Ge+Mi)),H.blitFramebuffer(Wt,de,Xt,zt,Zt,Ie,Xt,zt,H.DEPTH_BUFFER_BIT,H.NEAREST);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||ot.has(T)){let Ye=ot.get(T),Jn=ot.get(V);v.bindFramebuffer(H.READ_FRAMEBUFFER,k),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,et);for(let Be=0;Be<Kt;Be++)ri?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.__webglTexture,X,ye+Be):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ye.__webglTexture,X),De?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Jn.__webglTexture,Bt,Ge+Be):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Jn.__webglTexture,Bt),X!==0?H.blitFramebuffer(Wt,de,Xt,zt,Zt,Ie,Xt,zt,H.COLOR_BUFFER_BIT,H.NEAREST):De?H.copyTexSubImage3D(Ht,Bt,Zt,Ie,Ge+Be,Wt,de,Xt,zt):H.copyTexSubImage2D(Ht,Bt,Zt,Ie,Wt,de,Xt,zt);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else De?T.isDataTexture||T.isData3DTexture?H.texSubImage3D(Ht,Bt,Zt,Ie,Ge,Xt,zt,Kt,Fe,nn,Ve.data):V.isCompressedArrayTexture?H.compressedTexSubImage3D(Ht,Bt,Zt,Ie,Ge,Xt,zt,Kt,Fe,Ve.data):H.texSubImage3D(Ht,Bt,Zt,Ie,Ge,Xt,zt,Kt,Fe,nn,Ve):T.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Bt,Zt,Ie,Xt,zt,Fe,nn,Ve.data):T.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Bt,Zt,Ie,Ve.width,Ve.height,Fe,Ve.data):H.texSubImage2D(H.TEXTURE_2D,Bt,Zt,Ie,Xt,zt,Fe,nn,Ve);v.pixelStorei(H.UNPACK_ROW_LENGTH,tn),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ee),v.pixelStorei(H.UNPACK_SKIP_PIXELS,Tn),v.pixelStorei(H.UNPACK_SKIP_ROWS,Zn),v.pixelStorei(H.UNPACK_SKIP_IMAGES,zn),Bt===0&&V.generateMipmaps&&H.generateMipmap(Ht),v.unbindTexture()},this.initRenderTarget=function(T){ot.get(T).__webglFramebuffer===void 0&&ht.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ht.setTextureCube(T,0):T.isData3DTexture?ht.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ht.setTexture2DArray(T,0):ht.setTexture2D(T,0),v.unbindTexture()},this.resetState=function(){B=0,q=0,tt=null,v.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ae._getUnpackColorSpace()}};var oS=["top","side","bottom"],aS={slab_bottom:1,slab_top:1,stairs:1},Ym=[[0,.5,0,1,1,.5],[.5,.5,0,1,1,1],[0,.5,.5,1,1,1],[0,.5,0,.5,1,1]];function lS(n){return!n||!n.shape?null:n.shape==="slab_bottom"?[[0,0,0,1,.5,1]]:n.shape==="slab_top"?[[0,.5,0,1,1,1]]:n.shape==="stairs"?[[0,0,0,1,.5,1],Ym[n.facing|0]]:n.shape==="pole"?[[.32,0,.32,.68,1,.68]]:null}function $m(n){let t=n&&n.blocks||[],e=n&&n.items||[],i=new Array(256).fill(null),s=Object.create(null),r=[];for(let R of t){if(!R||typeof R.id!="string")throw new Error("block without id");if(!Number.isInteger(R.n)||R.n<0||R.n>255)throw new Error("bad n for "+R.id);if(i[R.n])throw new Error("duplicate n "+R.n+" ("+R.id+")");if(s[R.id])throw new Error("duplicate id "+R.id);let N=R.colors||{},O=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},R);if(O.placeable=O.n!==0&&!O.liquid,O.colors={top:N.top||"#888888",side:N.side||N.top||"#888888",bottom:N.bottom||N.top||"#888888"},O.opaque=O.solid&&!O.transparent&&!O.cutout&&!aS[O.shape],O.tile={},O.tileOf&&s[O.tileOf])O.tile=Object.assign({},s[O.tileOf].tile);else if(O.n!==0){let J={};for(let j of oS){let k=O.colors[j]+"|"+(O.pattern==="grass"||O.pattern==="log"||O.pattern==="lamp"||O.pattern==="table"||O.pattern==="stele"||O.pattern==="torch"||O.pattern==="bed"||O.pattern==="snow"||O.pattern==="lantern"||O.pattern==="bookshelf"||O.pattern==="hay"||O.pattern==="barrel"||O.pattern==="chest"||O.pattern==="farmland"?j:"");J[k]===void 0&&(J[k]=r.length,r.push({block:O.id,face:j,color:O.colors[j],pattern:O.pattern,accent:O.accent||null,top:O.colors.top})),O.tile[j]=J[k]}}i[O.n]=O,s[O.id]=O}if(!s.air)throw new Error("registry needs air");for(let R of e){if(s[R.id])throw new Error("duplicate id "+R.id);s[R.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},R)}for(let R in s){let N=s[R].drops;if(N&&N!=="self"&&!s[N])throw new Error(R+" drops unknown "+N)}let o=R=>(typeof R=="number"?i[R]:s[R])||null,a=new Uint8Array(256),u=new Uint8Array(256),h=new Uint8Array(256),m=new Uint8Array(256),f=new Uint8Array(256),d=new Uint8Array(256),x={torch:1,cross:2,small:3,carpet:4,slab_bottom:5,slab_top:6,stairs:7,ramp:8,pole:9},p=new Uint8Array(256),M=new Array(256).fill(null),y=new Uint8Array(256),g=new Uint8Array(256),P=new Uint8Array(256),F=new Uint8Array(256),E=new Uint8Array(256),C=new Int16Array(256).fill(-1),w=new Int16Array(256).fill(-1),D=new Int16Array(256).fill(-1);i.forEach((R,N)=>{R&&(y[N]=R.solid?1:0,g[N]=R.opaque?1:0,P[N]=R.transparent?1:0,F[N]=R.emissive?1:0,E[N]=R.liquid?1:0,a[N]=R.light!=null?R.light:R.emissive?15:0,u[N]=R.liquid?2:0,h[N]=x[R.shape]||0,m[N]=R.cutout?1:0,f[N]=+R.climbable||0,d[N]=R.plant?1:0,p[N]=R.facing|0,R.solid&&(M[N]=lS(R)),N&&(C[N]=R.tile.top,w[N]=R.tile.side,D[N]=R.tile.bottom))});let b=(n&&n.blueprints||[]).map(R=>Object.assign({kind:"blueprint"},R));return{blocks:i.filter(Boolean),items:e.map(R=>s[R.id]),blueprints:b,tiles:r,get:o,toolOf:R=>{let N=R&&s[R];return N&&N.kind==="item"&&N.tool&&typeof N.tool=="object"?N.tool:null},num:R=>{let N=s[R];if(!N||N.kind!=="block")throw new Error("no block "+R);return N.n},name:R=>{let N=o(R);return N?N.name_zh:String(R)},maxStack:R=>{let N=s[R];return N?N.maxStack:64},dropOf:R=>{let N=i[R];return!N||!N.drops?null:N.drops==="self"?N.id:N.drops},breakTime:R=>{let N=i[R];return!N||N.hardness<0?1/0:.25+N.hardness*.55},flat:{solid:y,opaque:g,trans:P,emit:F,liquid:E,tileTop:C,tileSide:w,tileBottom:D,lightEmit:a,attn:u,shape:h,cutout:m,climb:f,plant:d,facing:p,boxes:M}}}var $i=n=>Math.floor(n/16);var me=(n,t,e)=>(t*16+e)*16+n;var Ni=(n,t)=>n+","+t,Zm=n=>n.split(",").map(Number);function Yu(n,t,e){if(n=Math.floor(n),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let i=$i(n),s=$i(e);return{cx:i,cz:s,i:me(n-i*16,t,e-s*16)}}function Jm(n,t,e){let i=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let o=r*r+s*s;o<=e*e+e&&i.push({cx:n+r,cz:t+s,d2:o})}return i.sort((s,r)=>s.d2-r.d2)}function qn(n,t,e,i){let s=(n|0)^Math.imul(t|0,668265261)^Math.imul(e|0,374761393)^Math.imul(i|0,2654435761);return s=Math.imul(s^s>>>15,2246822507),s=Math.imul(s^s>>>13,3266489909),s^=s>>>16,(s>>>0)/4294967296}var Ss=(n,t,e)=>qn(n,t,0,e);function cS(n){let t=n>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var $u=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],hS=.5*(Math.sqrt(3)-1),Vo=(3-Math.sqrt(3))/6;function Ui(n){let t=cS(n),e=new Uint8Array(256);for(let s=0;s<256;s++)e[s]=s;for(let s=255;s>0;s--){let r=Math.floor(t()*(s+1)),o=e[s];e[s]=e[r],e[r]=o}let i=new Uint8Array(512);for(let s=0;s<512;s++)i[s]=e[s&255];return function(s,r){let o=(s+r)*hS,a=Math.floor(s+o),u=Math.floor(r+o),h=(a+u)*Vo,m=s-(a-h),f=r-(u-h),d=m>f?1:0,x=1-d,p=m-d+Vo,M=f-x+Vo,y=m-1+2*Vo,g=f-1+2*Vo,P=a&255,F=u&255,E=0,C,w;return C=.5-m*m-f*f,C>0&&(w=$u[i[P+i[F]]&7],C*=C,E+=C*C*(w[0]*m+w[1]*f)),C=.5-p*p-M*M,C>0&&(w=$u[i[P+d+i[F+x]]&7],C*=C,E+=C*C*(w[0]*p+w[1]*M)),C=.5-y*y-g*g,C>0&&(w=$u[i[P+1+i[F+1]]&7],C*=C,E+=C*C*(w[0]*y+w[1]*g)),70*E}}function Zi(n,t,e,i){let s=1,r=1,o=0,a=0;for(let u=0;u<i;u++)o+=s*n(t*r,e*r),a+=s,s*=.5,r*=2;return o/a}function Zu(n){let t=e=>e*e*(3-2*e);return function(e,i,s){let r=Math.floor(e),o=Math.floor(i),a=Math.floor(s),u=t(e-r),h=t(i-o),m=t(s-a),f=(x,p,M)=>qn(n,r+x,o+p,a+M),d=(x,p,M)=>x+(p-x)*M;return d(d(d(f(0,0,0),f(1,0,0),u),d(f(0,1,0),f(1,1,0),u),h),d(d(f(0,0,1),f(1,0,1),u),d(f(0,1,1),f(1,1,1),u),h),m)}}var Lr=160,mi=18,Ju=[[0,1],[-1,0],[0,-1],[1,0]];function Km(n,t,e,i,s){return s===1?[i-1-t,n]:s===2?[e-1-n,i-1-t]:s===3?[t,e-1-n]:[n,t]}var uS=(n,t,e)=>e&1?[t,n]:[n,t];function jm(n,t,e){let i=new Map,s=t.SEA,r=e&&e.templates||{};function o(u,h){let m=u+","+h;if(i.has(m))return i.get(m);let f=null,d=x=>qn(n+909,u,x,h);if(d(0)<.45&&e&&e.houses&&e.houses.length){let x=Math.floor((u+.2+d(1)*.6)*Lr),p=Math.floor((h+.2+d(2)*.6)*Lr),M=t.biomeOf(x,p),y=t.height(x,p),g=(M==="plains"||M==="desert")&&Math.hypot(x,p)>110;if(g&&y>s+1)for(let P=0;P<16&&g;P++)for(let F of[7,14]){let E=t.height(x+Math.round(Math.cos(P*.39)*F),p+Math.round(Math.sin(P*.39)*F));(Math.abs(E-y)>3||E<=s)&&(g=!1)}else g=!1;if(g){let P=[],F=[],E=3+Math.floor(d(3)*4),C=(w,D,b,R)=>{let N=r[w];if(!N)return null;let[O,J]=uS(N.size[0],N.size[2],R),j={tpl:w,rot:R,x0:D-(O>>1),z0:b-(J>>1),y,w:O,d:J,h:N.size[1]};return P.push(j),j};C("well",x,p,0),C("lamp_post",x+3,p+3,0),C("lamp_post",x-3,p-3,0);for(let w=0;w<E;w++){let D=w/E*Math.PI*2+d(10+w)*.5,b=9+d(20+w)*3,R=x+Math.round(Math.cos(D)*b),N=p+Math.round(Math.sin(D)*b),O=x-R,J=p-N,j=0,k=-1/0;Ju.forEach((rt,St)=>{let Ct=rt[0]*O+rt[1]*J;Ct>k&&(k=Ct,j=St)});let et=e.houses[Math.floor(d(30+w)*e.houses.length)],B=C(et,R,N,j);if(!B)continue;let q=r[et],[tt,Z]=Km(q.door[0],q.door[1],q.size[0],q.size[2],j),it={x:B.x0+tt+Ju[j][0],z:B.z0+Z+Ju[j][1]};F.push({ax:x,az:p,bx:it.x,bz:it.z})}f={id:m,x,z:p,y,biome:M,structures:P,paths:F,villagers:2+Math.floor(d(4)*3)}}}return i.set(m,f),f}function a(u,h,m,f){let d=[];for(let x=Math.floor((h-mi)/Lr);x<=Math.floor((f+mi)/Lr);x++)for(let p=Math.floor((u-mi)/Lr);p<=Math.floor((m+mi)/Lr);p++){let M=o(p,x);M&&M.x+mi>=u&&M.x-mi<=m&&M.z+mi>=h&&M.z-mi<=f&&d.push(M)}return d}return{plan:o,around:a,chunk:(u,h)=>a(u*16,h*16,u*16+16-1,h*16+16-1)}}function Qm(n,t,e,i,s,r,o){let a=t*16,u=e*16,h=(p,M)=>p>=a&&p<a+16&&M>=u&&M<u+16,m=i.biome==="desert",f=m?s.desert||{}:{},d=p=>{let M=s.palette[p];if(!M)return null;let y=f[M]||M;return r.byId(y)},x=m?r.byId("sandstone"):r.byId("cobblestone");for(let p of i.paths){let M=Math.max(Math.abs(p.bx-p.ax),Math.abs(p.bz-p.az));for(let y=0;y<=M;y++){let g=Math.round(p.ax+(p.bx-p.ax)*y/M),P=Math.round(p.az+(p.bz-p.az)*y/M);if(!h(g,P))continue;let F=o.height(g,P),E=me(g-a,F,P-u);n[E]&&n[E]!==r.water&&(n[E]=r.path);for(let C=F+1;C<Math.min(64,F+4);C++){let w=me(g-a,C,P-u);(n[w]===r.leaves||n[w]===r.log||C===F+1)&&(n[w]=0)}}}for(let p of i.structures){let M=s.templates[p.tpl];if(!M)continue;let[y,,g]=M.size;for(let P=0;P<g;P++)for(let F=0;F<y;F++){let[E,C]=Km(F,P,y,g,p.rot),w=p.x0+E,D=p.z0+C;if(!h(w,D))continue;let b=w-a,R=D-u;for(let N=p.y-1;N>Math.max(0,p.y-8);N--){let O=me(b,N,R);if(n[O]&&n[O]!==r.water)break;n[O]=x}for(let N=p.y+M.size[1];N<Math.min(64,p.y+M.size[1]+3);N++)n[me(b,N,R)]=0;M.layers.forEach((N,O)=>{let J=(N[P]||"")[F];if(!J||J===" ")return;let j=p.y+O;j>=64||(n[me(b,j,R)]=J==="."?0:d(J)||0)})}}}var ws=192;function t0(n,t,e){let i=e&&e.ruins,s=new Map;function r(a,u){let h=a+","+u;if(s.has(h))return s.get(h);let m=null;if(i){let f=p=>Ss(n+9001+p*31,a,u),d=a*ws+24+Math.floor(f(2)*(ws-48)),x=u*ws+24+Math.floor(f(3)*(ws-48));if(f(1)<i.chance&&Math.hypot(d,x)>140){let p=i.byBiome[t.biomeOf(d,x)],M=Array.isArray(p)?p[Math.floor(f(4)*p.length)]:p,y=M&&i.templates[M];if(y&&!(t.villages&&t.villages.around(d-40,x-40,d+40,x+40).length)){let g=y.layers[0][0].length,P=y.layers[0].length;m={id:h,kind:M,x:d-(g>>1),z:x-(P>>1),y:t.height(d,x)+(y.yoff||0),w:g,d:P,h:y.layers.length}}}}return s.set(h,m),m}function o(a,u,h,m){let f=[];for(let d=Math.floor((u-32)/ws);d<=Math.floor((m+32)/ws);d++)for(let x=Math.floor((a-32)/ws);x<=Math.floor((h+32)/ws);x++){let p=r(x,d);p&&p.x<=h&&p.x+p.w>a&&p.z<=m&&p.z+p.d>u&&f.push(p)}return f}return{around:o,chunk:(a,u)=>o(a*16,u*16,a*16+16-1,u*16+16-1),at:(a,u)=>o(Math.floor(a),Math.floor(u),Math.floor(a),Math.floor(u))[0]||null}}function e0(n,t,e,i,s,r){let o=s.ruins.templates[i.kind],a=s.ruins.palette,u=t*16,h=e*16,m=o.foundation?r(o.foundation):0,f=r("water");o.layers.forEach((d,x)=>d.forEach((p,M)=>{for(let y=0;y<p.length;y++){let g=p[y];if(g===" ")continue;let P=i.x+y-u,F=i.z+M-h,E=i.y+x;if(!(P<0||P>=16||F<0||F>=16||E<=0||E>=64)&&(n[me(P,E,F)]=g==="."?0:r(a[g]),x===0&&m))for(let C=E-1,w=0;C>0&&w<8;C--,w++){let D=n[me(P,C,F)];if(D&&D!==f)break;n[me(P,C,F)]=m}}}))}function n0(n,t,e){let i=(Math.imul(n,73856093)^Math.imul(t,19349663)^Math.imul(e,83492791))>>>0||1;return()=>{i=i+1831565813>>>0;let s=i;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296}}function i0(n,t,e,i){let s=n.createInventory(27);for(let r of t||[])if(e()<r.p){let o=r.min+Math.floor(e()*(r.max-r.min+1));if(o>0){let a;do a=Math.floor(e()*27);while(s.slots[a]&&s.slots.some(u=>!u));s.slots[a]||(s.slots[a]={id:r.id,count:Math.min(o,i?i(r.id):64)})}}return s}var Nn=24;var r0={shadow:"\u6697\u5F71\u754C",ocean:"\u6D77\u6D0B",plains:"\u8349\u539F",forest:"\u68EE\u6797",desert:"\u6C99\u6F20",snow:"\u96EA\u5730",bamboo:"\u7AF9\u6797"},s0=[{ore:"coal",y0:5,y1:55,count:12,chance:1,size:7},{ore:"iron",y0:4,y1:40,count:8,chance:1,size:5},{ore:"gold",y0:3,y1:24,count:3,chance:.8,size:4},{ore:"diamond",y0:2,y1:13,count:2,chance:.6,size:3},{ore:"dark",y0:2,y1:11,count:2,chance:.5,size:3}],Dr=112;function o0(n,t,e){let i=B=>t.num(B),s=B=>{try{return i(B)}catch{return 0}},r={air:0,grass:i("grass"),dirt:i("dirt"),stone:i("stone"),sand:i("sand"),water:i("water"),log:i("log"),leaves:i("leaves"),coal:i("coal_ore"),iron:i("iron_ore"),ruby:i("ruby_ore"),gold:i("gold_ore"),diamond:i("diamond_ore"),bedrock:i("bedrock"),stele:i("stele")};Object.assign(r,{portal:s("portal_forest"),sandstone:s("sandstone")||r.stone,cactus:s("cactus"),snow:s("snow")||r.grass,ice:s("ice")||r.water,slog:s("spruce_log")||r.log,sleaves:s("spruce_leaves")||r.leaves}),r.path=s("path")||r.dirt,r.byId=s,r.dark=s("dark_crystal_ore")||r.stone;let o=["flower_rose","flower_marigold","flower_dandelion","flower_hydrangea","flower_cornflower","flower_lavender","flower_peony"].map(s).filter(Boolean);Object.assign(r,{bamboo:s("bamboo"),tallgrass:s("tallgrass"),fern:s("fern"),deadbush:s("deadbush"),mushR:s("mushroom_red"),mushB:s("mushroom_brown")});let a=Ui(n),u=Ui(n+101),h=Ui(n+202),m=Ui(n+303),f=Ui(n+404),d=Zu(n+505),x=Zu(n+606);function p(B,q){let tt=Zi(a,B/190,q/190,3),Z=Zi(u,B/55,q/55,4),it=Math.max(0,Zi(h,B/130,q/130,2)-.1),rt=27+tt*9+Z*6+it*it*75;return Math.max(4,Math.min(54,Math.floor(rt)))}let M=Ui(n+808);function y(B,q){let tt=p(B,q),Z=Zi(M,B/900,q/900,2),it=Math.min(1,Math.max(0,(Math.hypot(B,q)-240)/80)),rt=Math.min(1,Math.max(0,(-.18-Z)/.17)),St=rt*rt*(3-2*rt)*it;return St>0&&(tt=Math.round(tt*(1-St)+(Nn-14)*St)),tt<Nn-1?Math.max(3,Math.floor(Nn-1-(Nn-1-tt)*1.8)):tt}function g(B,q){let tt=(Ss(n+3,B,q)-.5)*.025;return{t:Zi(m,B/420,q/420,2)+tt,u:Zi(f,B/380,q/380,2)-tt}}function P(B,q,tt=y(B,q)){if(tt<Nn-1)return"ocean";let{t:Z,u:it}=g(B,q);return Z<-.3?"snow":Z>.28&&it<.05?"desert":it>.12?Z>.25&&it>.3&&Math.hypot(B-F,q-E)>200?"bamboo":"forest":"plains"}let F=0,E=0,C=null;function w(){if(C)return C;let B=(q,tt)=>{let Z=y(q,tt);return Z>=Nn+2&&Math.abs(y(q+1,tt)-Z)<2&&Math.abs(y(q,tt+1)-Z)<2};for(let q=0;q<400;q+=2)for(let tt=0;tt<Math.max(1,q*2);tt++){let Z=tt/Math.max(1,q*2)*Math.PI*2,it=Math.round(Math.cos(Z)*q),rt=Math.round(Math.sin(Z)*q);if(B(it,rt)&&B(it+3,rt+2))return C={x:it+.5,y:y(it,rt)+1,z:rt+.5,stele:{x:it+3,y:y(it+3,rt+2)+1,z:rt+2},portal:{x:it-3,y:Math.max(Nn+1,y(it-3,rt+2))+1,z:rt+2}},C}return C={x:.5,y:60,z:.5,stele:{x:3,y:58,z:2}},C}function D(B,q){let tt=[],Z=B*16,it=q*16,rt=Math.floor((Z-80)/Dr),St=Math.floor((Z+16+80)/Dr),Ct=Math.floor((it-80)/Dr),Gt=Math.floor((it+16+80)/Dr);for(let qt=Ct;qt<=Gt;qt++)for(let Ft=rt;Ft<=St;Ft++){let W=Pt=>qn(n+707,Ft,Pt,qt);if(W(0)>.25)continue;let Y=(Ft+W(1))*Dr,ut=(qt+W(2))*Dr,mt=W(3)*Math.PI,_t=40+W(4)*30;tt.push({ax:Y-Math.cos(mt)*_t/2,az:ut-Math.sin(mt)*_t/2,dx:Math.cos(mt)*_t,dz:Math.sin(mt)*_t,len:_t,floor:7+Math.floor(W(5)*6),w:1.6+W(6)*1.2})}return tt}function b(B,q){let tt=new Uint8Array(16384),Z=B*16,it=q*16,rt=18,St=new Int16Array(rt*rt);for(let Y=-1;Y<=16;Y++)for(let ut=-1;ut<=16;ut++)St[(Y+1)*rt+ut+1]=y(Z+ut,it+Y);let Ct=w(),Gt=new Array(256);for(let Y=0;Y<16;Y++)for(let ut=0;ut<16;ut++){let mt=Z+ut,_t=it+Y,Pt=St[(Y+1)*rt+ut+1],le=Math.max(Math.abs(St[(Y+1)*rt+ut]-Pt),Math.abs(St[(Y+1)*rt+ut+2]-Pt),Math.abs(St[Y*rt+ut+1]-Pt),Math.abs(St[(Y+2)*rt+ut+1]-Pt))>=3,Dt=Gt[Y*16+ut]=P(mt,_t,Pt),ct=Pt<=Nn+1,Qt,Nt;Dt==="ocean"||ct||Dt==="desert"?(Qt=r.sand,Nt=r.sand):le?(Qt=r.stone,Nt=r.stone):Dt==="snow"?(Qt=r.snow,Nt=r.dirt):(Qt=r.grass,Nt=r.dirt);for(let re=0;re<=Pt;re++){let ge;if(re===0?ge=r.bedrock:re===Pt?ge=Qt:re>=Pt-3?ge=Nt:Dt==="desert"&&re>=Pt-7?ge=r.sandstone:ge=r.stone,ge===r.stone&&le&&re>=Pt-4){let _e=qn(n,mt,re,_t);_e<.06?ge=r.coal:_e<.09?ge=r.iron:_e<.096&&(ge=r.ruby)}tt[me(ut,re,Y)]=ge}for(let re=Pt+1;re<=Nn;re++)tt[me(ut,re,Y)]=re===Nn&&Dt==="snow"?r.ice:r.water}R(tt,B,q,St,rt);for(let Y=0;Y<s0.length;Y++){let ut=s0[Y],mt=r[ut.ore];for(let _t=0;_t<ut.count;_t++){let Pt=Qt=>qn(n+31*Y+Qt,B*977+_t,Qt,q*131+_t);if(Pt(9)>ut.chance)continue;let le=Math.floor(Pt(1)*16),Dt=ut.y0+Math.floor(Pt(2)*(ut.y1-ut.y0)),ct=Math.floor(Pt(3)*16);for(let Qt=0;Qt<ut.size;Qt++){le>=0&&le<16&&ct>=0&&ct<16&&Dt>0&&Dt<64&&tt[me(le,Dt,ct)]===r.stone&&(tt[me(le,Dt,ct)]=mt);let Nt=Math.floor(Pt(10+Qt)*6);Nt===0?le++:Nt===1?le--:Nt===2?Dt++:Nt===3?Dt--:Nt===4?ct++:ct--}}}let qt=e?k.chunk(B,q):[];N(tt,B,q,St,rt,Gt,Ct,qt);for(let Y of qt)Qm(tt,B,q,Y,e,r,j);if(et)for(let Y of et.chunk(B,q))e0(tt,B,q,Y,e,r.byId);let Ft=Ct.stele;if(Math.floor(Ft.x/16)===B&&Math.floor(Ft.z/16)===q){let Y=Ft.x-Z,ut=Ft.z-it;tt[me(Y,Ft.y,ut)]=r.stele,tt[me(Y,Ft.y+1,ut)]=r.stele}let W=Ct.portal;if(r.portal&&W&&Math.floor(W.x/16)===B&&Math.floor(W.z/16)===q){let Y=W.x-Z,ut=W.z-it;for(let mt=Math.max(1,W.y-3);mt<W.y;mt++)(!tt[me(Y,mt,ut)]||tt[me(Y,mt,ut)]===r.water)&&(tt[me(Y,mt,ut)]=r.stone);tt[me(Y,W.y,ut)]=r.portal,tt[me(Y,W.y+1,ut)]=r.portal}return tt}function R(B,q,tt,Z,it){let rt=q*16,St=tt*16,Ct=4,Gt=16/Ct+1,qt=64/Ct+1,Ft=new Float32Array(Gt*Gt*qt);for(let ut=0;ut<qt;ut++)for(let mt=0;mt<Gt;mt++)for(let _t=0;_t<Gt;_t++){let Pt=rt+_t*Ct,le=ut*Ct,Dt=St+mt*Ct,ct=d(Pt/22,le/14,Dt/22)-.5,Qt=x(Pt/22,le/14,Dt/22)-.5;Ft[(ut*Gt+mt)*Gt+_t]=ct*ct+Qt*Qt}let W=(ut,mt,_t)=>Ft[(mt*Gt+_t)*Gt+ut],Y=D(q,tt);for(let ut=0;ut<16;ut++)for(let mt=0;mt<16;mt++){let _t=Z[(ut+1)*it+mt+1],Pt=_t<=Nn+1,le=Pt?_t-5:_t,Dt=mt>>2,ct=ut>>2,Qt=(mt&3)/Ct,Nt=(ut&3)/Ct;for(let _e=3;_e<=le;_e++){let oe=_e>>2,Oe=(_e&3)/Ct,H=W(Dt,oe,ct)+(W(Dt+1,oe,ct)-W(Dt,oe,ct))*Qt,He=W(Dt,oe,ct+1)+(W(Dt+1,oe,ct+1)-W(Dt,oe,ct+1))*Qt,Me=W(Dt,oe+1,ct)+(W(Dt+1,oe+1,ct)-W(Dt,oe+1,ct))*Qt,U=W(Dt,oe+1,ct+1)+(W(Dt+1,oe+1,ct+1)-W(Dt,oe+1,ct+1))*Qt;if((H+(He-H)*Nt)*(1-Oe)+(Me+(U-Me)*Nt)*Oe<.008){let $=me(mt,_e,ut);B[$]!==r.bedrock&&B[$]!==r.water&&(B[$]=0)}}if(!Y.length||Pt)continue;let re=rt+mt,ge=St+ut;for(let _e of Y){let oe=Math.max(0,Math.min(1,((re-_e.ax)*_e.dx+(ge-_e.az)*_e.dz)/(_e.len*_e.len))),Oe=_e.ax+_e.dx*oe,H=_e.az+_e.dz*oe,He=Math.hypot(re-Oe,ge-H),Me=_e.w*Math.sin(Math.PI*oe);if(He<Me)for(let U=_e.floor+Math.floor(He*2);U<=_t;U++){let v=me(mt,U,ut);B[v]!==r.water&&(B[v]=0)}}}}function N(B,q,tt,Z,it,rt,St,Ct){let Gt=q*16,qt=tt*16;for(let Ft=0;Ft<16;Ft++)for(let W=0;W<16;W++){let Y=Gt+W,ut=qt+Ft,mt=Z[(Ft+1)*it+W+1],_t=rt[Ft*16+W];if(mt+1>=64||Math.hypot(Y-St.x,ut-St.z)<48)continue;let Pt=B[me(W,mt,Ft)],le=me(W,mt+1,Ft);if(B[le])continue;let Dt=Ss(n+11,Y,ut),ct=Ss(n+13,Y,ut);Pt===r.grass?Dt<.012&&o.length?B[le]=o[Math.floor(ct*o.length)]:Dt<(_t==="plains"?.1:.05)&&r.tallgrass?B[le]=r.tallgrass:_t==="forest"&&Dt<.08&&r.fern?B[le]=r.fern:_t==="forest"&&Dt<.084&&r.mushR&&(B[le]=ct<.5?r.mushR:r.mushB):Pt===r.sand&&_t==="desert"&&mt>Nn+1&&Dt<.008&&r.deadbush&&(B[le]=r.deadbush)}for(let Ft=2;Ft<14;Ft++)for(let W=2;W<14;W++){let Y=Gt+W,ut=qt+Ft,mt=Z[(Ft+1)*it+W+1],_t=rt[Ft*16+W],Pt=B[me(W,mt,Ft)];if(Math.abs(Y-St.x)<7&&Math.abs(ut-St.z)<7||Ct.some(Qt=>Math.abs(Y-Qt.x)<mi+2&&Math.abs(ut-Qt.z)<mi+2))continue;let le=Ss(n+7,Y,ut),Dt=Ss(n+9,Y,ut);if(_t==="desert"&&Pt===r.sand&&mt>Nn+1&&le<.008&&r.cactus){let Qt=1+Math.floor(Dt*3);for(let Nt=mt+1;Nt<=mt+Qt&&Nt<64;Nt++)B[me(W,Nt,Ft)]=r.cactus;continue}if(_t==="snow"&&Pt===r.snow&&le<.02){J(B,W,Ft,mt,5+Math.floor(Dt*3));continue}if(_t==="bamboo"&&Pt===r.grass&&r.bamboo&&le<.07){for(let Qt=mt+1;Qt<=mt+4+Math.floor(Dt*5)&&Qt<64;Qt++){let Nt=me(W,Qt,Ft);if(B[Nt]&&B[Nt]!==r.tallgrass)break;B[Nt]=r.bamboo}continue}let ct=_t==="forest"?.035:_t==="plains"?.003:0;Pt===r.grass&&le<ct&&O(B,W,Ft,mt,Y,ut,4+Math.floor(Dt*2))}}function O(B,q,tt,Z,it,rt,St){let Ct=Z+St;if(!(Ct+2>=64)){for(let Gt=Ct-2;Gt<=Ct+1;Gt++){let qt=Gt>=Ct?1:2;for(let Ft=-qt;Ft<=qt;Ft++)for(let W=-qt;W<=qt;W++){if(qt===2&&Math.abs(W)===2&&Math.abs(Ft)===2&&qn(n,it+W,Gt,rt+Ft)<.6)continue;let Y=me(q+W,Gt,tt+Ft);B[Y]===r.air&&(B[Y]=r.leaves)}}B[me(q,Z,tt)]=r.dirt;for(let Gt=Z+1;Gt<=Ct;Gt++)B[me(q,Gt,tt)]=r.log}}function J(B,q,tt,Z,it){let rt=Z+it;if(!(rt+2>=64)){for(let St=Z+2;St<=rt+1;St++){let Ct=rt+1-St,Gt=Ct>=4?2:Ct>=1?1:0;for(let qt=-Gt;qt<=Gt;qt++)for(let Ft=-Gt;Ft<=Gt;Ft++){if(Gt===2&&Math.abs(Ft)+Math.abs(qt)>3)continue;let W=me(q+Ft,St,tt+qt);B[W]===r.air&&(B[W]=r.sleaves)}}B[me(q,Z,tt)]=r.dirt;for(let St=Z+1;St<=rt;St++)B[me(q,St,tt)]=r.slog}}{let B=w();F=B.x,E=B.z}let j={height:y,baseHeight:p,biomeOf:P,climate:g,genChunk:b,findSpawn:w,SEA:Nn},k=jm(n,j,e);j.villages=k;let et=e&&e.ruins?t0(n,j,e):null;return j.ruins=et,j}function ju(n,t,e,i,s,r,o){let a=i/2,u=n-a,h=n+a,m=t,f=t+s,d=e-a,x=e+a,p=Math.floor(u),M=Math.floor(h-1e-6),y=Math.floor(m),g=Math.floor(f-1e-6),P=Math.floor(d),F=Math.floor(x-1e-6),E=!1;for(let C=y;C<=g;C++)for(let w=P;w<=F;w++)for(let D=p;D<=M;D++){let b=r(D,C,w);if(!b)continue;let R=b===!0?dS:b;for(let N of R){let O=D+N[0],J=C+N[1],j=w+N[2],k=D+N[3],et=C+N[4],B=w+N[5];if(!(k<=u+1e-6||O>=h-1e-6||et<=m+1e-6||J>=f-1e-6||B<=d+1e-6||j>=x-1e-6)){if(!o)return!0;E=!0,o.push([O,J,j,k,et,B])}}}return E}var dS=[[0,0,0,1,1,1]],Ho=(n,t,e,i,s,r)=>ju(n,t,e,i,s,r,null),a0=(n,t,e=.6,i=1.8)=>!Ho(n.x,n.y,n.z,e,i,t);function Ac(n,t,e,i,s={}){let r=s.w||.6,o=s.h||1.8,a=!!s.canStep,u=r/2,h=!1,m=0,f=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,d=Math.max(1,Math.ceil(f/.3)),x=e/d,p=[];for(let M=0;M<d;M++){let y=t.y*x;y&&(p.length=0,ju(n.x,n.y+y,n.z,r,o,i,p)?(y<0?(n.y=Math.max(...p.map(g=>g[4])),h=!0):n.y=Math.min(...p.map(g=>g[1]))-o,t.y=0):n.y+=y);for(let g of["x","z"]){let P=t[g]*x;if(!P)continue;let F={x:n.x,y:n.y,z:n.z};if(F[g]+=P,p.length=0,!ju(F.x,F.y,F.z,r,o,i,p)){n[g]=F[g];continue}if(a&&(h||s.grounded)){let C=Math.max(...p.map(w=>w[4]));if(C-n.y>0&&C-n.y<=1.01&&!Ho(F.x,C,F.z,r,o,i)&&!Ho(n.x,C,n.z,r,o,i)){m+=C-n.y,n.y=C,n[g]=F[g];continue}}let E=g==="x"?0:2;n[g]=P>0?Math.min(...p.map(C=>C[E]))-u-1e-4:Math.max(...p.map(C=>C[E+3]))+u+1e-4,Ho(n.x,n.y,n.z,r,o,i)&&(n[g]=F[g]-P),t[g]=0}}return!h&&t.y<=0&&Ho(n.x,n.y-.02,n.z,r,o,i)&&(h=!0),{onGround:h,stepped:m}}function pS(n,t,e,i,s,r){let o=[n.x,n.y,n.z],a=[t.x,t.y,t.z],u=null;for(let h of r){let m=[e+h[0],i+h[1],s+h[2]],f=[e+h[3],i+h[4],s+h[5]],d=0,x=1/0,p=-1,M=!0;for(let y=0;y<3&&M;y++){if(Math.abs(a[y])<1e-12){(o[y]<m[y]||o[y]>f[y])&&(M=!1);continue}let g=(m[y]-o[y])/a[y],P=(f[y]-o[y])/a[y];g>P&&([g,P]=[P,g]),g>d&&(d=g,p=y),P<x&&(x=P),d>x&&(M=!1)}if(M&&(!u||d<u.t)){let y=[0,0,0];p>=0&&(y[p]=-Math.sign(a[p])),u={t:d,face:p>=0?y:null}}}return u}function Nr(n,t,e,i,s,r){let o=Math.floor(n.x),a=Math.floor(n.y),u=Math.floor(n.z),h=Math.sign(t.x),m=Math.sign(t.y),f=Math.sign(t.z),d=h?Math.abs(1/t.x):1/0,x=m?Math.abs(1/t.y):1/0,p=f?Math.abs(1/t.z):1/0,M=h?(h>0?o+1-n.x:n.x-o)*d:1/0,y=m?(m>0?a+1-n.y:n.y-a)*x:1/0,g=f?(f>0?u+1-n.z:n.z-u)*p:1/0,P=[0,0,0],F=0;for(;F<=e;){let E=i(o,a,u);if(E&&s(E)){let C=r&&r(E);if(!C)return{x:o,y:a,z:u,n:E,face:P,dist:F};let w=pS(n,t,o,a,u,C);if(w&&w.t<=e)return{x:o,y:a,z:u,n:E,face:w.face||P,dist:w.t}}M<y&&M<g?(o+=h,F=M,M+=d,P=[-h,0,0]):y<g?(a+=m,F=y,y+=x,P=[0,-m,0]):(u+=f,F=g,g+=p,P=[0,0,-f])}return null}var rf={};Kn(rf,{ACC:()=>h0,BOOST:()=>Qu,BRAKE:()=>f0,CONN:()=>gi,DECAY:()=>d0,DIR:()=>Wo,FRIC:()=>u0,MAX:()=>Go,OPP:()=>Fr,SLOPE_G:()=>tf,UP:()=>Fi,blockId:()=>Xo,connect:()=>Tc,isStraight:()=>ef,linked:()=>p0,mount:()=>nf,next:()=>qo,pos:()=>Cc,shapeOf:()=>Ur,step:()=>sf});var gi={ns:["n","s"],ew:["e","w"],ne:["n","e"],nw:["n","w"],se:["s","e"],sw:["s","w"],asc_n:["n","s"],asc_s:["s","n"],asc_e:["e","w"],asc_w:["w","e"]},Fi={asc_n:"n",asc_s:"s",asc_e:"e",asc_w:"w"},Wo={n:[0,-1],s:[0,1],e:[1,0],w:[-1,0]},Fr={n:"s",s:"n",e:"w",w:"e"},mS=["ns","ew","ne","nw","se","sw"],l0={n:[.5,0],s:[.5,1],e:[1,.5],w:[0,.5]},h0=3,Go=6,Qu=11,u0=.8,f0=6,d0=1.5,tf=2.5,ef=n=>n==="ns"||n==="ew"||!!Fi[n],Xo=(n,t)=>(n?"powered_rail":"rail")+(t==="ns"?"":"_"+t),Ec=(n,t)=>gi[n].find(e=>e!==t);function Ur(n,t){return!t||n===t?n==="n"||n==="s"?"ns":"ew":mS.find(e=>gi[e].includes(n)&&gi[e].includes(t))||null}function qo(n,t,e,i,s,r){let[o,a]=Wo[s];for(let u of Fi[r]===s?[1]:[0,-1]){let h=n(t+o,e+u,i+a);if(h&&gi[h.shape].includes(Fr[s])&&Fi[h.shape]===Fr[s]==(u===-1))return{x:t+o,y:e+u,z:i+a,r:h}}return null}function p0(n,t,e,i){let s=n(t,e,i);return s?gi[s.shape].filter(r=>qo(n,t,e,i,r,s.shape)):[]}function c0(n){let t=n.filter(e=>e.dy===1);if(t.length>1)return null;if(t.length){let e=t[0].d,i=n.find(s=>s!==t[0]);return!i||i.d===Fr[e]?"asc_"+e:null}return n.length===2?Ur(n[0].d,n[1].d):Ur(n[0].d)}function Tc(n,t,e,i,s,r="n"){let o=[];for(let h of["n","e","s","w"]){let[m,f]=Wo[h],d=Fr[h];for(let x of[0,1,-1]){let p=t+m,M=e+x,y=i+f,g=n(p,M,y);if(!g)continue;if(gi[g.shape].includes(d)&&Fi[g.shape]===d==(x===-1)){o.push({d:h,dy:x,pri:0});break}let P=p0(n,p,M,y);if(P.length>=2)continue;let F=null;if(x===-1?F=!P.length||P[0]===h?"asc_"+d:null:Fi[g.shape]&&P.includes(Fi[g.shape])||(F=P.length?Ur(P[0],d):Ur(d)),F&&(!g.powered||ef(F))){o.push({d:h,dy:x,pri:1,ns:F,at:[p,M,y]});break}}}o.sort((h,m)=>h.pri-m.pri);let a=[];for(let h of o){if(a.length===2)break;let m=c0(a.concat([h]));!m||s&&!ef(m)||a.push(h)}return{shape:a.length?c0(a):Ur(r),updates:a.filter(h=>h.pri===1).map(h=>[h.at[0],h.at[1],h.at[2],h.ns])}}function nf(n,t,e,i,s,r,o=()=>!1){let a=gi[n],u=m=>Wo[m][0]*s+Wo[m][1]*r+(o(m)?.01:0),h=u(a[0])>=u(a[1])?a[0]:a[1];return{x:t,y:e,z:i,shape:n,from:h===a[0]?a[1]:a[0],s:.5,v:0,lastIn:0}}function sf(n,t,e,i){let s=i(n.x,n.y,n.z);if(!s)return n.v=0,n;for(n.shape=s.shape,gi[s.shape].includes(n.from)||(n.from=gi[s.shape][0]),e<-.1&&n.lastIn>=-.1&&n.v===0&&(n.from=Ec(s.shape,n.from),n.s=1-n.s),n.lastIn=e,s.powered&&(n.v=Math.max(n.v,Qu)),e>.1?n.v<Go&&(n.v=Math.min(Go,n.v+h0*t)):e<-.1?n.v=Math.max(0,n.v-f0*t):n.v=Math.max(0,n.v-u0*t),n.v>Go&&!s.powered&&(n.v=Math.max(Go,n.v-d0*t)),Fi[s.shape]&&(n.v+=(Ec(s.shape,n.from)===Fi[s.shape]?-tf:tf)*t,n.v<0&&(n.from=Ec(s.shape,n.from),n.s=1-n.s,n.v=-n.v)),n.s+=n.v*t;n.s>=1;){let r=Ec(s.shape,n.from),o=qo(i,n.x,n.y,n.z,r,s.shape);if(o)n.x=o.x,n.y=o.y,n.z=o.z,n.from=Fr[r],n.s-=1,s=o.r,n.shape=s.shape,s.powered&&(n.v=Math.max(n.v,Qu));else{n.s=1,n.v=0;break}}return n}function Cc(n){let t=gi[n.shape],e=t.includes(n.from)?n.from:t[0],i=t[0]===e?t[1]:t[0],s=l0[e],r=l0[i],o=[.5,.5],a=Math.max(0,Math.min(1,n.s)),[u,h,m]=a<.5?[s,o,a*2]:[o,r,a*2-1],f=u[0]+(h[0]-u[0])*m,d=u[1]+(h[1]-u[1])*m,x=Fi[n.shape],p=x?x==="n"?1-d:x==="s"?d:x==="e"?f:1-f:0,M=x?i===x?1:-1:0;return{x:n.x+f,y:n.y+p,z:n.z+d,yaw:Math.atan2(-(h[0]-u[0]),-(h[1]-u[1])),pitch:Math.atan2(M,1)*(x?1:0)}}var hf={};Kn(hf,{WINDOW:()=>gS,create:()=>of,reel:()=>lf,roll:()=>cf,tick:()=>af});var gS=1.3,m0=n=>3+n()*6;function of(n=Math.random){return{phase:"wait",t:0,biteAt:m0(n),rnd:n}}function af(n,t){return n.t+=t,n.phase==="wait"&&n.t>=n.biteAt?(n.phase="bite",n.t=0,"bite"):n.phase==="bite"&&n.t>1.3?(n.phase="wait",n.t=0,n.biteAt=m0(n.rnd),"escape"):null}var lf=n=>n&&n.phase==="bite"?"catch":"early";function cf(n,t=Math.random){let e=n.reduce((s,r)=>s+r.w,0),i=t()*e;for(let s of n)if(i-=s.w,i<0)return s;return n[n.length-1]}function g0(n){return{stats:Object.assign({},n&&n.stats),done:Object.assign({},n&&n.done)}}function x0(n,t,e=1){n.stats[t]=(n.stats[t]||0)+e}function y0(n,t,e=Date.now()){let i=[];for(let s of t)!n.done[s.id]&&(n.stats[s.stat]||0)>=s.need&&(n.done[s.id]=e,i.push(s));return i}var _0=(n,t)=>Math.min(t.need,n.stats[t.stat]||0);function v0(n,t,e,i,s=5){let r=0;for(let o of n)Math.abs(o[0]-t)<=s&&Math.abs(o[1]-e)<=s&&Math.abs(o[2]-i)<=s&&r++;return r}function M0(n){let t=new Uint8Array(256);for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=0;for(let r=63;r>=0;r--){let o=n[me(i,r,e)];if(o){s=o;break}}t[e*16+i]=s}return t}var b0=n=>btoa(String.fromCharCode.apply(null,n)),S0=n=>Uint8Array.from(atob(n),t=>t.charCodeAt(0));var yS=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],Rc=class{constructor(t,e){this.reg=t,this.tops=new Map,this.tiles=new Map,this.portals=new Map,this.dirty=!1,this.rgb=[];for(let i of t.blocks)this.rgb[i.n]=yS(i.colors.top);if(e&&e.tops)for(let i in e.tops)try{this.tops.set(i,S0(e.tops[i]))}catch{}if(e&&Array.isArray(e.portals))for(let i of e.portals)this.portals.set(i.x+","+i.z,i)}scan(t,e,i=4){let s=0;for(let[r,o]of t.chunks){if(s>=i)break;if(!o.vox||this.tops.has(r)&&!(e&&e.has(r)))continue;e&&e.delete(r);let a=M0(o.vox);this.tops.set(r,a),this.tiles.delete(r),this.dirty=!0,s++;let[u,h]=Zm(r);for(let[m,f]of[...this.portals])Math.floor(f.x/16)===u&&Math.floor(f.z/16)===h&&this.portals.delete(m);for(let m=0;m<256;m++){let f=this.reg.get(a[m]);if(f&&(f.interact==="portal"||f.interact==="shadow_portal")){let d=u*16+m%16,x=h*16+Math.floor(m/16);this.portals.set(d+","+x,{x:d,z:x,name:f.name_zh})}}}}tile(t){let e=this.tiles.get(t);if(e)return e;let i=this.tops.get(t);if(!i)return null;e=document.createElement("canvas"),e.width=e.height=16;let s=e.getContext("2d"),r=s.createImageData(16,16);for(let o=0;o<256;o++){let a=this.rgb[i[o]]||[239,235,221],u=o*4,h=.95+(o*2654435761>>>28)/16*.1;r.data[u]=a[0]*h,r.data[u+1]=a[1]*h,r.data[u+2]=a[2]*h,r.data[u+3]=i[o]?255:0}return s.putImageData(r,0,0),this.tiles.set(t,e),e}draw(t,e,i,s,r,o){t.imageSmoothingEnabled=!1;let a=e-r/2/s,u=i-o/2/s,h=e+r/2/s,m=i+o/2/s;for(let f=Math.floor(u/16);f<=Math.floor(m/16);f++)for(let d=Math.floor(a/16);d<=Math.floor(h/16);d++){let x=this.tile(Ni(d,f));x&&t.drawImage(x,Math.round((d*16-a)*s),Math.round((f*16-u)*s),Math.ceil(16*s),Math.ceil(16*s))}return{x0:a,z0:u}}explored(t,e){return this.tops.has(Ni(Math.floor(t/16),Math.floor(e/16)))}serialize(){let t={};for(let[e,i]of this.tops)t[e]=b0(i);return this.dirty=!1,{tops:t,portals:[...this.portals.values()]}}};function uf(n,t,e,i,s,r){let o=Math.atan2(-Math.cos(i),-Math.sin(i));n.save(),n.translate(t,e),n.rotate(o),n.fillStyle=r,n.strokeStyle="#EFEBDD",n.lineWidth=2,n.beginPath(),n.moveTo(s,0),n.lineTo(-s*.7,s*.65),n.lineTo(-s*.35,0),n.lineTo(-s*.7,-s*.65),n.closePath(),n.stroke(),n.fill(),n.restore()}var pf={};Kn(pf,{ARENA_R:()=>Yo,H0:()=>xi,LAIR:()=>yi,findFrame:()=>df,makeShadowTerrain:()=>ff});var xi=22,yi={x:0,z:40},Yo=14;function ff(n,t){let e=f=>t.num(f),i={stone:e("shadow_stone"),moss:e("shadow_moss"),vein:e("shadow_vein"),ore:e("dark_crystal_ore"),bedrock:e("bedrock"),frame:e("dark_crystal"),portal:e("shadow_portal"),bricks:e("shadow_bricks")},s=Ui(n+11),r=Ui(n+23),o=(f,d)=>f<d?1:f<d+8?1-(f-d)/8:0;function a(f,d){let x=xi+Zi(s,f/64,d/64,3)*10,p=Math.max(o(Math.hypot(f-.5,d-.5),9),o(Math.hypot(f-yi.x,d-yi.z),Yo+2));return x=x*(1-p)+xi*p,Math.max(6,Math.min(54,Math.round(x)))}let u=new Set;for(let f=0;f<8;f++)u.add(Math.round(yi.x+Math.cos(f*Math.PI/4)*Yo)+","+Math.round(yi.z+Math.sin(f*Math.PI/4)*Yo));function h(f,d){let x=new Uint8Array(16384),p=f*16,M=d*16;for(let y=0;y<16;y++)for(let g=0;g<16;g++){let P=p+g,F=M+y,E=a(P,F),C=Math.hypot(P-.5,F-.5),w=Math.hypot(P-yi.x,F-yi.z);for(let D=0;D<=E;D++){let b=D===0?i.bedrock:D===E?i.moss:i.stone;if(b===i.stone){let R=qn(n,P,D,F);D<16&&R<.014?b=i.ore:R>.995&&(b=i.vein)}x[me(g,D,y)]=b}if(C>6&&Math.abs(r(P/30,F/30))<.035&&(x[me(g,E,y)]=i.vein),w<Yo-1&&(x[me(g,E,y)]=(Math.floor(P)+Math.floor(F))%2?i.bricks:i.stone),u.has(P+","+F)){for(let D=E+1;D<=E+4;D++)x[me(g,D,y)]=i.bricks;x[me(g,E+5,y)]=i.vein}if(F===0&&P>=-1&&P<=2)for(let D=xi+1;D<=xi+5;D++){let b=P>=0&&P<=1&&D>=xi+2&&D<=xi+4;x[me(g,D,y)]=b?i.portal:i.frame}}return x}let m={x:1,y:xi+1,z:2.5,stele:{x:1,y:xi+1,z:10}};return{height:a,baseHeight:a,biomeOf:()=>"shadow",climate:()=>({t:0,u:0}),genChunk:h,findSpawn:()=>m,SEA:0,villages:{around:()=>[],chunk:()=>[]}}}function df(n,t,e,i,s,r=o=>o===0){for(let o of[[1,0],[0,1]])for(let a=-2;a<=1;a++)for(let u=-4;u<=1;u++){let h=t+o[0]*a,m=i+o[1]*a,f=e+u,d=(M,y)=>[h+o[0]*M,f+y,m+o[1]*M],x=[];for(let M=0;M<2;M++)for(let y=0;y<3;y++)x.push(d(M,y));if(!x.every(M=>r(n(M[0],M[1],M[2]))))continue;let p=[];for(let M=0;M<3;M++)p.push(d(-1,M),d(2,M));for(let M=0;M<2;M++)p.push(d(M,-1),d(M,3));if(p.every(M=>n(M[0],M[1],M[2])===s)&&p.some(M=>M[0]===t&&M[1]===e&&M[2]===i))return x}return null}var Dc={};Kn(Dc,{HOTBAR:()=>mf,SIZE:()=>Ic,add:()=>wn,canAdd:()=>Zo,count:()=>Yn,craft:()=>xf,craftable:()=>Lc,createInventory:()=>$o,deserialize:()=>Pc,moveBetween:()=>yf,moveSlot:()=>gf,remove:()=>Vs,serialize:()=>Jo,takeFromSlot:()=>Un});var Ic=36,mf=9;function $o(n=36){return{slots:new Array(n).fill(null)}}function wn(n,t,e,i=()=>64){let s=i(t);for(let r=0;r<n.slots.length&&e>0;r++){let o=n.slots[r];if(o&&o.id===t&&o.count<s){let a=Math.min(e,s-o.count);o.count+=a,e-=a}}for(let r=0;r<n.slots.length&&e>0;r++)if(!n.slots[r]){let o=Math.min(e,s);n.slots[r]={id:t,count:o},e-=o}return e}function Yn(n,t){return n.slots.reduce((e,i)=>e+(i&&i.id===t?i.count:0),0)}function Vs(n,t,e){if(Yn(n,t)<e)return!1;for(let i=n.slots.length-1;i>=0&&e>0;i--){let s=n.slots[i];if(s&&s.id===t){let r=Math.min(e,s.count);s.count-=r,e-=r,s.count||(n.slots[i]=null)}}return!0}function Un(n,t,e=1){let i=n.slots[t];if(!i||i.count<e)return null;i.count-=e;let s=i.id;return i.count||(n.slots[t]=null),s}function gf(n,t,e,i=()=>64){if(t===e)return;let s=n.slots[t],r=n.slots[e];if(s&&r&&s.id===r.id){let o=Math.min(s.count,i(s.id)-r.count);r.count+=o,s.count-=o,s.count||(n.slots[t]=null);return}n.slots[t]=r,n.slots[e]=s}function Zo(n,t,e,i=()=>64){let s={slots:n.slots.map(r=>r&&{...r})};return wn(s,t,e,i)===0}var Jo=n=>n.slots.map(t=>t?Number.isFinite(t.dur)?[t.id,t.count,t.dur]:[t.id,t.count]:0);function Pc(n,t=36){let e=$o(t);return(n||[]).slice(0,t).forEach((i,s)=>{Array.isArray(i)&&typeof i[0]=="string"&&i[1]>0&&(e.slots[s]={id:i[0],count:i[1]|0},Number.isFinite(i[2])&&(e.slots[s].dur=i[2]))}),e}function Lc(n,t,e={}){if(t.blueprint&&!(e.owned&&e.owned.has(t.blueprint)))return{ok:!1,reason:"blueprint"};if(t.needs&&!(e.near&&e.near.has(t.needs)))return{ok:!1,reason:"needs"};for(let i in t.in)if(Yn(n,i)<t.in[i])return{ok:!1,reason:"materials"};return{ok:!0}}function xf(n,t,e=()=>64,i){let s=Lc(n,t,i||{near:new Set([t.needs]),owned:new Set([t.blueprint])});if(!s.ok)return s;let r=n.slots.map(o=>o&&{...o});for(let o in t.in)Vs(n,o,t.in[o]);return wn(n,t.out.id,t.out.count,e)>0?(n.slots=r,{ok:!1,reason:"full"}):{ok:!0}}function yf(n,t,e,i,s=()=>64){let r=n.slots[t],o=e.slots[i];if(r&&o&&r.id===o.id){let a=Math.min(r.count,s(r.id)-o.count);o.count+=a,r.count-=a,r.count||(n.slots[t]=null);return}n.slots[t]=o,e.slots[i]=r}function _S(n=0){return{coins:n|0,earned:0,spent:0,owned:[]}}var Or=(n,t)=>n.owned.includes(t),w0=(n,t)=>n?t?2:1:0;function Fn(n,t){return t=Math.max(0,t|0),n.coins+=t,n.earned+=t,n.coins}function Hs(n,t){return t=Math.max(0,t|0),n.coins<t?!1:(n.coins-=t,n.spent+=t,!0)}function A0(n){return n.blocks.concat(n.items).filter(t=>t&&t.buy).map(t=>({id:t.id,name_zh:t.name_zh,qty:t.buy.qty||1,price:t.buy.price|0,locked:t.buy.locked||null})).concat((n.blueprints||[]).map(t=>({id:t.id,name_zh:t.name_zh,qty:1,price:t.price|0,locked:t.locked||null,blueprint:!0,desc:t.desc||""})))}function E0(n,t,e,i=()=>64){return e?e.locked?{ok:!1,reason:"locked"}:e.blueprint&&Or(n,e.id)?{ok:!1,reason:"owned"}:n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?(Hs(n,e.price),n.owned.push(e.id),{ok:!0}):Zo(t,e.id,e.qty,i)?(Hs(n,e.price),wn(t,e.id,e.qty,i),{ok:!0}):{ok:!1,reason:"full"}:{ok:!1,reason:"missing"}}var T0=n=>({coins:n.coins,earned:n.earned,spent:n.spent,owned:n.owned.slice()});function C0(n){let t=_S(n&&n.coins);return n&&(t.earned=n.earned|0,t.spent=n.spent|0,t.owned=Array.isArray(n.owned)?n.owned.slice():[]),t}function I0(n){let t=()=>n&&n.KidsAuth,e=()=>n&&n.KidsCoins;return{loggedIn:()=>{try{return!!(t()&&t().isLoggedIn())}catch{return!1}},ready(){let i=e();return this.loggedIn()&&!!i&&typeof i.balance=="function"&&typeof i.spend=="function"},balance:()=>{try{let i=e().balance();return typeof i=="number"?i:null}catch{return null}},spend:(i,s)=>e().spend({amount:i,item:s}),report:i=>{try{e().report&&e().report(i)}catch{}}}}function P0(n,{mode:t="local",member:e=null}={}){return t==="member"&&e&&e.ready()?{source:"member",balance:()=>e.balance()??0,earn:(s,r)=>(e.report({type:"game",item:r||"hero-world",correct:s,total:s}),e.balance()),canSpend:s=>(e.balance()??0)>=s,spend:async(s,r)=>{try{let o=await e.spend(s,r);return o&&o.ok?{ok:!0}:{ok:!1,reason:o&&o.reason||"coins"}}catch{return{ok:!1,reason:"offline"}}}}:{source:"local",balance:()=>n.coins,earn:s=>Fn(n,s),canSpend:s=>n.coins>=s,spend:async s=>Hs(n,s)?{ok:!0}:{ok:!1,reason:"coins"}}}function L0(){let n=()=>{};return{online:!1,join:()=>Promise.resolve({ok:!1,reason:"offline"}),leave:n,sendState:n,sendBlock:n,sendEmote:n,on:n}}var wf={};Kn(wf,{createStory:()=>_f,currentMain:()=>Mf,dailyPicks:()=>D0,dailyProgress:()=>Sf,restartTutorial:()=>vf,skipTutorial:()=>Nc,tick:()=>bf});function _f(n){return n=n||{},{tut:n.tut||{step:0,base:null,done:!1},main:n.main|0,daily:n.daily||null}}function D0(n,t,e=3){let i=2166136261;for(let o of String(t))i=Math.imul(i^o.charCodeAt(0),16777619)>>>0;let s=n.map((o,a)=>a),r=[];for(;r.length<Math.min(e,n.length);)i=Math.imul(i^i>>>13,2654435761)>>>0,r.push(s.splice(i%s.length,1)[0]);return r.map(o=>n[o].id)}var vf=n=>{n.tut={step:0,base:null,done:!1}},Nc=(n,t)=>{n.tut={step:t.tutorial.length,base:null,done:!0}},Mf=(n,t)=>t.main[n.main]||null;function bf(n,t,e,i){let s=[];if(!n.tut.done){let r=t.tutorial[n.tut.step];r?(n.tut.base==null&&(n.tut.base=e(r.stat)),e(r.stat)-n.tut.base>=r.need&&(s.push({kind:"tut",q:r}),n.tut.step++,n.tut.base=null,n.tut.step>=t.tutorial.length&&(n.tut.done=!0))):n.tut.done=!0}for(;n.main<t.main.length&&e(t.main[n.main].stat)>=t.main[n.main].need;)s.push({kind:"main",q:t.main[n.main]}),n.main++;if(!n.daily||n.daily.date!==i){let r=D0(t.daily,i);n.daily={date:i,picks:r,base:Object.fromEntries(r.map(o=>{let a=t.daily.find(u=>u.id===o);return[o,e(a.stat)]})),done:[]}}for(let r of n.daily.picks){if(n.daily.done.includes(r))continue;let o=t.daily.find(a=>a.id===r);o&&e(o.stat)-n.daily.base[r]>=o.need&&(n.daily.done.push(r),s.push({kind:"daily",q:o}))}return s}var Sf=(n,t,e,i)=>{let s=t.daily.find(r=>r.id===i);return Math.min(s.need,Math.max(0,e(s.stat)-(n.daily&&n.daily.base[i]||0)))};var jo=[{name_zh:"\u55AE\u5B57",modules:["words"],types:["zh2en","en2zh","zh2en-type"]},{name_zh:"\u55AE\u5B57\uFF0B\u6587\u6CD5",modules:["words","grammar"],types:["grammar-fill","zh2en-type","en2zh"]},{name_zh:"\u53E5\u578B\uFF0B\u7247\u8A9E",modules:["words","grammar","patterns","phrases"],types:["pattern-choose","phrase-fill","grammar-fill","zh2en-type"]}],Ko=100,N0={choice:25,typed:40},bS=5,Af=100;function U0(){return{phase:0,hp:Ko,retry:[],done:!1}}function F0(n,t,e,i){if(n.done)return{done:!0};if(!t)return n.hp=Math.min(Ko,n.hp+bS),i&&!n.retry.includes(i)&&n.retry.push(i),{ok:!1};i&&(n.retry=n.retry.filter(r=>r!==i));let s=e?N0.typed:N0.choice;return n.hp-=s,n.hp>0?{ok:!0,dmg:s}:n.phase<jo.length-1?(n.phase++,n.hp=Ko,{ok:!0,dmg:s,phaseUp:n.phase}):(n.hp=0,n.done=!0,{ok:!0,dmg:s,done:!0})}var Ef=[{body:"#4A3A6B",belly:"#9C8AC8",wing:"#6B5A95"},{body:"#7A2E3A",belly:"#E09A7F",wing:"#A04A55"},{body:"#2E4A7A",belly:"#9CC4E8",wing:"#4A6EA8"}];function wS(){let n=document.createElement("canvas");n.width=128,n.height=80;let t=n.getContext("2d");for(let i of[34,94])t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(i,36,22,24,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(i+4,40,10,0,7),t.fill(),t.fillStyle="#EFEBDD",t.beginPath(),t.arc(i+8,35,3,0,7),t.fill();t.strokeStyle="#151714",t.lineWidth=4,t.beginPath(),t.arc(64,60,10,.2,Math.PI-.2),t.stroke();let e=new Gn(n);return e.colorSpace=en,e}function O0(){let n=new gn,t=[],e=(a,u)=>{let h=new Mn({color:a});return h.userData.base=new ue(a),h.userData.role=u,t.push(h),h},i=(a,u,h,m,f,d,x,p,M=n)=>{let y=new Ne(new Je(a,u,h),e(m,f));return y.position.set(d,x,p),M.add(y),y},s=Ef[0];i(2,1.4,2.8,s.body,"body",0,1.3,.2),i(1.6,.2,2.2,s.belly,"belly",0,.62,.2),i(.8,.8,1.2,s.body,"body",0,2,-1.4),i(1.3,1,1.3,s.body,"body",0,2.5,-2.2),i(.9,.4,.5,s.belly,"belly",0,2.2,-2.95);let r=new Ne(new Je(1.15,.72,.02),new Mn({map:wS(),transparent:!0}));r.position.set(0,2.62,-2.87),n.add(r);for(let a of[-1,1])i(.16,.42,.16,"#E0352B","accent",a*.42,3.18,-2.1),i(.4,.7,.4,s.wing,"wing",a*.7,.35,-.6),i(.4,.7,.4,s.wing,"wing",a*.7,.35,1);for(let a=0;a<3;a++)i(.22,.3,.3,"#E0352B","accent",0,2.12,-.6+a*.8);i(.7,.6,1.2,s.body,"body",0,1.1,2.1),i(.45,.4,1,s.body,"body",0,.95,3.1),i(.6,.12,.6,"#E0352B","accent",0,.95,3.75);let o=[-1,1].map(a=>{let u=new gn;return u.position.set(a*1,1.9,.2),n.add(u),i(2.4,.14,1.6,s.wing,"wing",a*1.2,0,0,u).rotation.x=-.55,i(2.4,.16,.16,"#E0352B","accent",a*1.2,.44,-.68,u),u});return n.userData={wings:o,mats:t,hitT:0},n.scale.setScalar(1.15),n}function z0(n,t,e,i=.9){let s=n.userData;s.hitT=Math.max(0,s.hitT-e),s.wings[0].rotation.z=.25+Math.sin(t*3)*.45,s.wings[1].rotation.z=-s.wings[0].rotation.z,n.scale.setScalar(1.15*(1+s.hitT*.3));for(let r of s.mats)r.color.copy(r.userData.base).multiplyScalar(s.hitT>0?1.4:i)}function B0(n,t){let e=Ef[Math.min(Ef.length-1,t)];for(let i of n.userData.mats)e[i.userData.role]&&i.userData.base.set(e[i.userData.role])}function AS(){return new Map}function k0(n,t,e,i){let s=n.get(t);s||(s=new Map,n.set(t,s)),s.set(e,i)}function Tf(n){let t=new Array(n.size*2),e=0;for(let[i,s]of n)t[e++]=i,t[e++]=s;return t}function ES(n){let t=new Map;for(let e=0;e+1<(n||[]).length;e+=2)t.set(n[e]|0,n[e+1]|0);return t}function V0(n){let t=AS();for(let e in n||{})t.set(e,ES(n[e]));return t}var Uc=16;var mT=18;var Ki=32;function H0(n){let t=n>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Qe=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],Mt=(n,t=1,e=1)=>`rgba(${Math.round(Math.min(255,n[0]*t))},${Math.round(Math.min(255,n[1]*t))},${Math.round(Math.min(255,n[2]*t))},${e})`;function TS(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function jt(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)n.lineTo(t[e][0],t[e][1]);n.closePath(),n.fill()}function Ji(n,t,e,i,s){let r=3+Math.floor(t()*2),o=[];for(let a=0;a<r;a++){let u=a/r*Math.PI*2+t()*.8;o.push([e+Math.cos(u)*s*(.6+t()*.5),i+Math.sin(u)*s*(.6+t()*.5)])}jt(n,o)}var CS=new Set(["flower","tallgrass","fern","deadbush","mushroom","ladder","door_open","wheat","rail","scaffold"]);function RS(n,t){let e=Qe(t.color),i=H0(TS(t.block+t.face)),s=Ki;if(CS.has(t.pattern)){IS(n,t,e,i,s);return}let r=1;t.pattern==="stained"?r=.5:t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),n.fillStyle=Mt(e,1,r),n.fillRect(0,0,s,s);let o=t.pattern,a=t.accent?Qe(t.accent):null;if(o==="grass"&&t.face==="top"){n.fillStyle=Mt(e,1.12);for(let f=0;f<4;f++)Ji(n,i,i()*s,i()*s,5+i()*4)}if(o==="snow"&&t.face==="top"){n.fillStyle=Mt(e,.96);for(let f=0;f<4;f++)Ji(n,i,i()*s,i()*s,4+i()*4)}if((o==="grass"||o==="snow")&&t.face==="side"){let f=Qe(t.top);n.fillStyle=Mt(f);let d=[[0,0],[s,0]];for(let x=s;x>=0;x-=4)d.push([x,8+Math.round(i()*5)]);jt(n,d)}if(o==="stone"||o==="bedrock")for(let f=0;f<5;f++)n.fillStyle=Mt(e,i()<.5?.9:1.08),Ji(n,i,i()*s,i()*s,4+i()*6);if(o==="ore"){for(let f=0;f<4;f++)n.fillStyle=Mt(e,.92),Ji(n,i,i()*s,i()*s,5);n.fillStyle=Mt(a);for(let f=0;f<5;f++)Ji(n,i,5+i()*(s-10),5+i()*(s-10),2.5+i()*2.5)}if(o==="sand")for(let f=0;f<26;f++)n.fillStyle=Mt(e,i()<.5?.92:1.05),n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2);if(o==="log"&&t.face==="side")for(let f=3;f<s;f+=7)n.fillStyle=Mt(e,.82),n.fillRect(f,0,2,s);if(o==="log"&&t.face!=="side"&&(n.fillStyle=Mt(e,.85),n.fillRect(6,6,s-12,s-12),n.fillStyle=Mt(e,1.05),n.fillRect(11,11,s-22,s-22)),o==="leaves")for(let f=0;f<9;f++)n.fillStyle=Mt(e,i()<.5?.78:1.15),Ji(n,i,i()*s,i()*s,3+i()*4);if(o==="planks"||o==="table"&&t.face==="bottom"){for(let f=7;f<s;f+=8)n.fillStyle=Mt(e,.78),n.fillRect(0,f,s,1);n.fillStyle=Mt(e,.85),n.fillRect(12,0,1,7),n.fillRect(22,8,1,7),n.fillRect(6,16,1,7),n.fillRect(18,24,1,8)}if(o==="table"&&t.face==="top"&&(n.fillStyle=Mt(e,.8),n.fillRect(s/2-1,3,2,s-6),n.fillRect(3,s/2-1,s-6,2)),o==="table"&&t.face==="side"&&(n.fillStyle=Mt(e,.7),n.fillRect(6,10,7,14),n.fillStyle=Mt([185,182,174]),jt(n,[[18,10],[27,12],[25,15],[19,14]]),n.fillStyle=Mt(e,.6),n.fillRect(21,14,2,10)),o==="glass"&&(n.fillStyle="rgba(255,255,255,0.45)",jt(n,[[6,24],[9,24],[24,9],[24,6]])),o==="water"){n.fillStyle=Mt(e,1.18,.72);for(let f=6;f<s;f+=10)n.fillRect(4+Math.floor(i()*10),f,10,2)}if(o==="gold"&&(n.fillStyle=Mt(e,1.15),jt(n,[[0,0],[s,0],[0,s]]),n.fillStyle=Mt(e,.9),jt(n,[[s,s],[s,8],[8,s]])),o==="lamp"&&(t.face==="side"?(n.fillStyle=Mt(Qe("#F3E3B5")),n.fillRect(7,6,s-14,s-12),n.fillStyle=Mt(e,.85),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3)):t.face==="top"&&(n.fillStyle=Mt(e,1.05),n.fillRect(8,8,s-16,s-16))),o==="torch"&&(n.clearRect(0,0,s,s),t.face==="side"?(n.fillStyle=Mt(Qe("#8C6640")),n.fillRect(13,0,6,s),n.fillStyle=Mt(Qe("#F2C46B")),n.fillRect(13,0,6,8),n.fillStyle=Mt(a),n.fillRect(14,0,4,4)):(n.fillStyle=Mt(Qe(t.face==="top"?"#F2C46B":"#8C6640")),n.fillRect(12,12,8,8))),o==="bed"&&(t.face==="top"?(n.fillStyle=Mt(a),n.fillRect(0,0,s,10),n.fillStyle=Mt(e,.85),n.fillRect(0,10,s,3)):t.face==="side"&&(n.fillStyle=Mt(Qe("#E0352B")),n.fillRect(0,0,s,14),n.fillStyle=Mt(a),n.fillRect(0,0,9,14))),o==="wool")for(let f=0;f<7;f++)n.fillStyle=Mt(e,i()<.5?.94:1.04),Ji(n,i,i()*s,i()*s,4+i()*4);if(o==="portal"&&(n.fillStyle=Mt(a),n.fillRect(5,5,s-10,s-10),n.fillStyle=Mt(a,1.3),jt(n,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),n.fillStyle=Mt(Qe("#EFEBDD"),1,.8),jt(n,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),n.fillStyle=Mt(a),n.fillRect(s/2-3,s/2-3,6,6)),o==="sandstone")for(let f=8;f<s;f+=9)n.fillStyle=Mt(e,.9),n.fillRect(0,f,s,2);if(o==="cactus")if(t.face==="side"){for(let f=4;f<s;f+=8)n.fillStyle=Mt(e,.82),n.fillRect(f,0,2,s);n.fillStyle=Mt(Qe("#EFEBDD"),1,.7);for(let f=0;f<6;f++)n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2)}else n.fillStyle=Mt(e,.85),n.fillRect(6,6,s-12,s-12);if(o==="bamboo")if(t.face==="side"){n.fillStyle=Mt(e,.8),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s),n.fillStyle=Mt(e,1.25);for(let f of[9,24])n.fillRect(0,f,s,3)}else n.fillStyle=Mt(e,1.2),n.fillRect(8,8,s-16,s-16);if(o==="ice"&&(n.fillStyle="rgba(255,255,255,0.4)",jt(n,[[4,22],[8,22],[22,6],[18,6]])),o==="stained"&&(n.fillStyle="rgba(255,255,255,0.35)",jt(n,[[6,24],[9,24],[24,9],[24,6]])),o==="paper"&&(n.fillStyle=Mt(e,1.1),jt(n,[[0,0],[s,0],[0,s*.7]]),n.fillStyle=Mt(e,.92),jt(n,[[s,s],[s*.45,s],[s,s*.4]])),o==="stonebricks"||o==="mossy"&&t.block.includes("bricks")||o==="cracked"){n.fillStyle=Mt(e,.78);for(let f=0;f<s;f+=8){n.fillRect(0,f+7,s,1);let d=f/8%2?0:8;for(let x=d;x<s;x+=16)n.fillRect(x,f,1,8)}}if(o==="mossy"){n.fillStyle=Mt(a);for(let f=0;f<6;f++)Ji(n,i,i()*s,i()*s,3+i()*4)}if(o==="cracked"&&(n.fillStyle=Mt(e,.6),jt(n,[[4,2],[12,14],[10,15],[3,4]]),jt(n,[[20,18],[29,30],[27,31],[19,20]])),o==="chiseled"&&(n.fillStyle=Mt(e,.8),n.fillRect(5,5,s-10,s-10),n.fillStyle=Mt(e,1.08),n.fillRect(9,9,s-18,s-18),n.fillStyle=Mt(e,.85),n.fillRect(13,13,s-26,s-26)),o==="smooth"&&(n.fillStyle=Mt(e,.9),n.fillRect(0,s/2,s,1)),o==="polished"&&(n.fillStyle=Mt(e,1.08),jt(n,[[0,0],[s*.6,0],[0,s*.6]])),o==="bricks"){n.fillStyle=Mt(Qe("#D9CBB5"));for(let f=0;f<s;f+=8){n.fillRect(0,f+6,s,2);let d=f/8%2?0:8;for(let x=d;x<s;x+=16)n.fillRect(x,f,2,6)}}if(o==="checker"&&(n.fillStyle=Mt(a),n.fillRect(0,0,s/2,s/2),n.fillRect(s/2,s/2,s/2,s/2)),o==="bookshelf"&&t.face==="side"){let f=["#C2443A","#4D6A99","#5E8B4E","#E1C04F","#7A5C8E","#D99AA5"];for(let d of[3,18]){let x=3;for(;x<s-4;){let p=3+Math.floor(i()*3);n.fillStyle=f[Math.floor(i()*f.length)],n.fillRect(x,d+Math.floor(i()*3),p,11),x+=p+1}}n.fillStyle=Mt(e,.7),n.fillRect(0,15,s,2)}if(o==="bookshelf"&&t.face!=="side")for(let f=7;f<s;f+=8)n.fillStyle=Mt(e,.8),n.fillRect(0,f,s,1);if(o==="hay")if(t.face==="side"){for(let f=3;f<s;f+=5)n.fillStyle=Mt(e,.88),n.fillRect(f,0,1,s);n.fillStyle=Mt(Qe("#8C6640")),n.fillRect(0,9,s,2),n.fillRect(0,21,s,2)}else n.fillStyle=Mt(e,.9),n.fillRect(8,8,s-16,s-16);if(o==="barrel")if(t.face==="side"){for(let f=5;f<s;f+=6)n.fillStyle=Mt(e,.85),n.fillRect(f,0,1,s);n.fillStyle=Mt(Qe("#3B3D3A")),n.fillRect(0,5,s,2),n.fillRect(0,s-7,s,2)}else n.fillStyle=Mt(e,.85),n.beginPath(),n.arc(s/2,s/2,11,0,7),n.fill(),n.fillStyle=Mt(e,1.05),n.beginPath(),n.arc(s/2,s/2,7,0,7),n.fill();if(o==="crate"&&(n.fillStyle=Mt(e,.78),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),jt(n,[[4,s-7],[s-7,4],[s-4,7],[7,s-4]])),o==="door"){for(let f=7;f<s;f+=8)n.fillStyle=Mt(e,.85),n.fillRect(f,0,1,s);n.fillStyle=Mt(Qe("#EFEBDD"),1,.9),n.fillRect(8,5,6,7),n.fillRect(18,5,6,7),n.fillStyle=Mt(Qe("#26302A")),n.fillRect(24,17,3,3)}if(o==="lantern"&&(t.face==="side"?(n.fillStyle=Mt(a),n.fillRect(0,0,s,5),n.fillRect(0,s-5,s,5),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s)):(n.fillStyle=Mt(e),n.fillRect(0,0,s,s),n.fillStyle=Mt(Qe("#F2C46B")),n.fillRect(12,12,8,8))),o==="chest"){for(let f=7;f<s;f+=8)n.fillStyle=Mt(e,.85),n.fillRect(0,f,s,1);t.face==="side"&&(n.fillStyle=Mt(a),n.fillRect(0,11,s,3),n.fillStyle=Mt(Qe("#D9A63A")),n.fillRect(s/2-3,10,6,7))}if(o==="farmland"&&t.face==="top")for(let f=3;f<s;f+=6)n.fillStyle=Mt(e,.72),n.fillRect(0,f,s,2);if(o==="furnace"){for(let f=0;f<4;f++)n.fillStyle=Mt(e,i()<.5?.9:1.08),Ji(n,i,i()*s,i()*s,4+i()*5);t.face==="side"?(n.fillStyle=Mt(a),n.fillRect(8,15,s-16,11),n.fillStyle=Mt(Qe("#E0352B"),1,.85),jt(n,[[11,26],[s/2,18],[s-11,26]])):(n.fillStyle=Mt(e,.8),n.fillRect(9,9,s-18,s-18))}o==="stele"&&t.face==="side"&&(n.fillStyle=Mt(e,1.12),n.fillRect(5,4,s-10,s-8),n.fillStyle=Mt(a),jt(n,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let u=n.getImageData(0,0,s,s),h=u.data;for(let f=0;f<h.length;f+=4){let d=1+(i()-.5)*.09;h[f]=Math.min(255,h[f]*d),h[f+1]=Math.min(255,h[f+1]*d),h[f+2]=Math.min(255,h[f+2]*d)}n.putImageData(u,0,0);let m=o==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";n.fillStyle=m,n.fillRect(0,0,s,2),n.fillRect(0,s-2,s,2),n.fillRect(0,2,2,s-4),n.fillRect(s-2,2,2,s-4),o!=="glass"&&o!=="water"&&(n.fillStyle="rgba(20,24,20,0.06)",n.fillRect(2,2,s-4,2),n.fillRect(2,s-4,s-4,2))}function G0(n){let t=document.createElement("canvas");t.width=t.height=Ki*Uc;let e=t.getContext("2d",{willReadFrequently:!0}),i=[];return n.tiles.forEach((s,r)=>{let o=document.createElement("canvas");o.width=o.height=Ki;let a=o.getContext("2d",{willReadFrequently:!0});RS(a,s),e.drawImage(o,r%Uc*Ki,Math.floor(r/Uc)*Ki),i[r]=o}),{canvas:t,tileCanvas:i}}function W0(n,t){let e={};for(let i of n.blocks){if(!i.n)continue;let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");if(i.shape==="pole"){r.drawImage(t.tileCanvas[i.tile.side],14,2,20,44),e[i.id]=s.toDataURL();continue}if(i.shape==="cross"||i.pattern==="ladder"||i.pattern==="door_open"||i.pattern==="rail"){r.drawImage(t.tileCanvas[i.tile.side],4,4,40,40),e[i.id]=s.toDataURL();continue}if(i.shape==="torch"){r.fillStyle="#8C6640",r.fillRect(21,16,6,28),r.fillStyle="#F2C46B",jt(r,[[18,18],[24,4],[30,18],[24,22]]),r.fillStyle="#E0352B",jt(r,[[21,16],[24,9],[27,16]]),e[i.id]=s.toDataURL();continue}let o=t.tileCanvas,a=1/Ki,u=(h,m,f,d,x,p,M,y)=>{r.setTransform(m*a,f*a,d*a,x*a,p,M),r.drawImage(o[h],0,0),y&&(r.fillStyle=`rgba(20,24,20,${y})`,r.fillRect(0,0,Ki,Ki))};u(i.tile.top,20,10,-20,10,24,4,0),u(i.tile.side,20,10,0,22,4,14,.12),u(i.tile.side,20,-10,0,22,24,24,.26),e[i.id]=s.toDataURL()}for(let i of n.items){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d"),o=i.icon,a=i.color,u="#8C6640";if(r.save(),r.translate(24,24),o==="lump")r.fillStyle=a,jt(r,[[-14,4],[-8,-12],[6,-14],[15,-2],[10,12],[-6,14]]),r.fillStyle="rgba(255,255,255,.18)",jt(r,[[-8,-12],[6,-14],[2,-4]]);else if(o==="ingot")r.fillStyle=a,jt(r,[[-18,8],[-10,-6],[12,-6],[18,8]]),r.fillStyle="rgba(255,255,255,.3)",jt(r,[[-10,-6],[12,-6],[9,-1],[-8,-1]]),r.fillStyle="rgba(0,0,0,.12)",r.fillRect(-18,8,36,4);else if(o==="hide")r.fillStyle=a,jt(r,[[-15,-10],[-6,-15],[8,-13],[16,-6],[13,12],[0,15],[-14,10]]),r.fillStyle="rgba(0,0,0,.14)",jt(r,[[-6,-4],[6,-6],[4,6],[-5,5]]);else if(o==="feather")r.rotate(-Math.PI/4),r.fillStyle=a,jt(r,[[0,-20],[7,-6],[5,10],[0,14],[-5,10],[-7,-6]]),r.fillStyle="#B9B6AE",r.fillRect(-1,-14,2,32);else if(o==="seeds"){r.fillStyle=a;for(let[h,m]of[[-6,-4],[3,-8],[6,3],[-3,6],[-9,6]])r.beginPath(),r.ellipse(h,m,3,2,.6,0,7),r.fill()}else if(o==="wheat"){r.rotate(-Math.PI/4),r.fillStyle="#B89A4A",r.fillRect(-1,-6,2,24),r.fillStyle=a;for(let h=0;h<4;h++)jt(r,[[0,-18+h*5],[-5,-14+h*5],[0,-12+h*5]]),jt(r,[[0,-18+h*5],[5,-14+h*5],[0,-12+h*5]])}else if(o==="bread"){r.fillStyle=a,r.beginPath(),r.ellipse(0,2,17,10,-.2,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)";for(let h of[-8,0,8])r.fillRect(h-1,-6,3,8)}else if(o==="armor_helmet")r.fillStyle=a,jt(r,[[-14,6],[-14,-6],[-6,-14],[6,-14],[14,-6],[14,6],[8,6],[8,-2],[-8,-2],[-8,6]]);else if(o==="armor_chest")r.fillStyle=a,jt(r,[[-16,-12],[-6,-16],[0,-10],[6,-16],[16,-12],[12,-2],[10,16],[-10,16],[-12,-2]]);else if(o==="armor_legs")r.fillStyle=a,jt(r,[[-12,-16],[12,-16],[12,16],[3,16],[0,-4],[-3,16],[-12,16]]);else if(o==="armor_boots")r.fillStyle=a,jt(r,[[-16,-4],[-8,-4],[-8,8],[-2,12],[-2,16],[-16,16]]),jt(r,[[2,-4],[10,-4],[10,8],[16,12],[16,16],[2,16]]);else if(o==="dye")r.fillStyle=a,r.beginPath(),r.arc(-2,2,12,0,7),r.fill(),r.beginPath(),r.arc(9,-8,5,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)",r.beginPath(),r.arc(-6,-2,4,0,7),r.fill();else if(o==="apple")r.fillStyle=a,r.beginPath(),r.arc(-4,3,11,0,7),r.arc(5,3,11,0,7),r.fill(),r.fillStyle="#8C6640",r.fillRect(-1,-14,3,8),r.fillStyle="#3E6B3A",jt(r,[[2,-10],[12,-15],[9,-6]]),r.fillStyle="rgba(255,255,255,.3)",r.beginPath(),r.arc(-8,-1,3,0,7),r.fill();else if(o==="fish")r.fillStyle=a,r.beginPath(),r.ellipse(-3,0,14,8,0,0,7),r.fill(),jt(r,[[9,0],[19,-9],[19,9]]),r.fillStyle="rgba(255,255,255,.25)",jt(r,[[-12,-3],[2,-7],[-2,-1]]),r.fillStyle="#26302A",r.beginPath(),r.arc(-10,-2,2,0,7),r.fill();else if(o==="rod")r.strokeStyle=a,r.lineWidth=4,r.beginPath(),r.moveTo(-16,17),r.lineTo(14,-16),r.stroke(),r.strokeStyle="#26302A",r.lineWidth=1,r.beginPath(),r.moveTo(14,-16),r.lineTo(14,8),r.stroke(),r.fillStyle="#E0352B",r.beginPath(),r.arc(14,10,4,0,7),r.fill();else if(o==="boat")r.fillStyle=a,jt(r,[[-19,-3],[19,-3],[13,10],[-13,10]]),r.fillStyle="rgba(0,0,0,.2)",jt(r,[[-15,-3],[15,-3],[13,1],[-13,1]]),r.fillStyle=u,r.fillRect(-2,-14,3,11);else if(o==="minecart"){r.fillStyle=a,jt(r,[[-16,-10],[16,-10],[13,8],[-13,8]]),r.fillStyle="rgba(0,0,0,.25)",jt(r,[[-12,-10],[12,-10],[11,-5],[-11,-5]]),r.fillStyle="#26302A";for(let h of[-8,8])r.beginPath(),r.arc(h,10,4,0,7),r.fill()}else if(o==="saddle")r.fillStyle=a,jt(r,[[-16,-2],[-10,-10],[-2,-6],[6,-12],[16,-4],[12,8],[-12,8]]),r.fillStyle="#26302A",r.fillRect(-2,8,4,9),r.fillStyle="#D9A63A",r.fillRect(-4,15,8,3);else if(o==="paper"){r.fillStyle=a,jt(r,[[-13,-16],[11,-17],[14,15],[-12,16]]),r.fillStyle="rgba(20,24,20,.16)";for(let h=0;h<4;h++)r.fillRect(-8,-9+h*6,16,2)}else o==="book"?(r.fillStyle=a,jt(r,[[-15,-15],[13,-17],[15,15],[-13,17]]),r.fillStyle="#EFEBDD",jt(r,[[10,-14],[14,-14],[15,13],[11,14]]),r.fillStyle="#E1C04F",jt(r,[[-8,-6],[6,-7],[6,-2],[-8,-1]])):o==="bow"?(r.strokeStyle=a,r.lineWidth=4,r.beginPath(),r.arc(-10,-10,24,-.15,Math.PI/2+.15),r.stroke(),r.strokeStyle="#EFEBDD",r.lineWidth=1.5,r.beginPath(),r.moveTo(13,-14),r.lineTo(-14,13),r.stroke()):o==="arrow"?(r.rotate(-Math.PI/4),r.fillStyle="#8C6640",r.fillRect(-1.5,-14,3,30),r.fillStyle=a,jt(r,[[0,-22],[6,-13],[-6,-13]]),r.fillStyle="#F4EFE2",jt(r,[[-1,10],[-7,18],[-1,16]]),jt(r,[[1,10],[7,18],[1,16]])):o==="meat"?(r.fillStyle=a,r.beginPath(),r.ellipse(-3,2,13,10,-.4,0,7),r.fill(),r.fillStyle="#EFEBDD",r.fillRect(7,-12,5,12),r.beginPath(),r.arc(11,-13,4,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.22)",r.beginPath(),r.ellipse(-7,-1,5,3,-.4,0,7),r.fill()):o==="gem"?(r.fillStyle=a,jt(r,[[0,-16],[14,-4],[0,16],[-14,-4]]),r.fillStyle="rgba(255,255,255,.35)",jt(r,[[0,-16],[14,-4],[0,-2]])):(r.rotate(-Math.PI/4),r.fillStyle=o==="stick"?a:u,r.fillRect(-3,-14,6,32),r.fillStyle=a,o==="pickaxe"&&(r.beginPath(),r.moveTo(-16,-14),r.quadraticCurveTo(0,-24,16,-14),r.lineTo(14,-9),r.quadraticCurveTo(0,-17,-14,-9),r.closePath(),r.fill()),o==="axe"&&jt(r,[[2,-18],[15,-14],[15,-2],[2,-6]]),o==="shovel"&&jt(r,[[-7,-22],[7,-22],[8,-10],[0,-5],[-8,-10]]),o==="hoe"&&r.fillRect(-3,-18,14,5),o==="sword"&&(r.fillRect(-4,-24,8,30),jt(r,[[-4,-24],[0,-30],[4,-24]]),r.fillStyle=u,r.fillRect(-9,6,18,4)));r.restore(),e[i.id]=s.toDataURL()}for(let i of n.blueprints||[]){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");r.fillStyle="#26302A",jt(r,[[6,10],[40,6],[42,38],[8,42]]),r.fillStyle="rgba(239,235,221,.55)";for(let o=0;o<4;o++)r.fillRect(12,14+o*7,24,2);r.fillStyle=i.id==="bp_diamond"?"#6FC7C0":"#D8D4CA",jt(r,[[28,26],[36,30],[30,38],[24,32]]),e[i.id]=s.toDataURL()}return e}function X0(){let n=H0(99),t=[],e=[];for(let i=0;i<4;i++){let s=document.createElement("canvas");s.width=s.height=Ki;let r=s.getContext("2d");i&&r.drawImage(e[i-1],0,0),r.fillStyle="rgba(21,23,20,0.55)";for(let o=0;o<3+i*2;o++){let a=6+n()*20,u=6+n()*20,h=n()*Math.PI;jt(r,[[a,u],[a+Math.cos(h)*9,u+Math.sin(h)*9],[a+Math.cos(h+.3)*6,u+Math.sin(h+.3)*6]])}e.push(s),t.push(s)}return t}function IS(n,t,e,i,s){n.clearRect(0,0,s,s);let r=t.pattern,o=t.accent?Qe(t.accent):e,a=(u,h,m)=>{n.fillStyle=m,n.fillRect(u,s-h,2,h)};if(r==="flower"){a(15,18,Mt(e)),n.fillStyle=Mt(e,1.1),jt(n,[[16,26],[9,20],[15,22]]),jt(n,[[17,24],[24,18],[18,21]]),n.fillStyle=Mt(o);for(let u=0;u<5;u++){let h=u/5*Math.PI*2;jt(n,[[16,9],[16+Math.cos(h)*7,9+Math.sin(h)*7],[16+Math.cos(h+.6)*7,9+Math.sin(h+.6)*7]])}n.fillStyle=Mt(Qe("#E1C04F")),n.fillRect(14,7,4,4)}else if(r==="tallgrass"||r==="fern")for(let u=0;u<6;u++){let h=4+u*4+Math.floor(i()*2),m=14+Math.floor(i()*14);n.fillStyle=Mt(e,i()<.5?.9:1.1),jt(n,[[h,s],[h+3,s],[h+1+(r==="fern"?2:0),s-m]])}else if(r==="deadbush")n.strokeStyle=Mt(e),n.lineWidth=2,n.beginPath(),n.moveTo(16,s),n.lineTo(16,18),n.lineTo(9,10),n.moveTo(16,20),n.lineTo(24,11),n.moveTo(16,24),n.lineTo(7,19),n.stroke();else if(r==="mushroom")n.fillStyle=Mt(e),n.fillRect(14,18,4,14),n.fillStyle=Mt(o),jt(n,[[6,19],[10,11],[16,8],[22,11],[26,19]]),n.fillStyle=Mt(Qe("#EFEBDD")),n.fillRect(12,13,3,2),n.fillRect(19,15,2,2);else if(r==="ladder"){n.fillStyle=Mt(e),n.fillRect(5,0,3,s),n.fillRect(s-8,0,3,s),n.fillStyle=Mt(e,1.12);for(let u=3;u<s;u+=7)n.fillRect(5,u,s-10,3)}else if(r==="scaffold")n.fillStyle=Mt(e,.82),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),n.fillStyle=Mt(e),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillStyle=Mt(e,1.1),jt(n,[[3,s-6],[s-6,3],[s-3,6],[6,s-3]]);else if(r==="wheat"){let u=Number(t.block.split("_")[1])||0,h=[8,14,21,28][u];for(let m=0;m<5;m++){let f=5+m*5;n.fillStyle=Mt(e),n.fillRect(f,s-h,2,h),u===3&&(n.fillStyle=Mt(o),jt(n,[[f-2,s-h+9],[f+1,s-h-1],[f+4,s-h+9]]))}}else if(r==="rail"){let u=(t.block.match(/_(ew|ne|nw|se|sw)$/)||[0,"ns"])[1],h={ns:0,ew:1,ne:0,se:1,sw:2,nw:3}[u];n.save(),n.translate(s/2,s/2),n.rotate(h*Math.PI/2),n.translate(-s/2,-s/2);let m=Mt(Qe("#8C6640")),f=Mt(e),d=s*.33,x=s*.67;if(u==="ns"||u==="ew"){n.fillStyle=m;for(let p=2;p<s;p+=6)n.fillRect(4,p,s-8,3);n.fillStyle=f,n.fillRect(d-1.5,0,3,s),n.fillRect(x-1.5,0,3,s),t.accent&&(n.fillStyle=Mt(o),n.fillRect(s/2-1.5,3,3,s-6))}else{n.strokeStyle=m,n.lineWidth=3;for(let p=0;p<5;p++){let M=Math.PI/2+(p+.5)/5*Math.PI/2;n.beginPath(),n.moveTo(s+Math.cos(M)*(s-x-4),Math.sin(M)*(s-x-4)),n.lineTo(s+Math.cos(M)*(s-d+4),Math.sin(M)*(s-d+4)),n.stroke()}n.strokeStyle=f;for(let p of[s-d,s-x])n.beginPath(),n.arc(s,0,p,Math.PI/2,Math.PI),n.stroke()}n.restore()}else r==="door_open"&&(n.fillStyle=Mt(e),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3),n.fillRect(0,0,3,s),n.fillRect(s-3,0,3,s))}var q0=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,Y0=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function PS(n,t){let e=$i(n),i=$i(t),s=[[e,i]];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(!o&&!r)continue;let a=(e+o)*16,u=(i+r)*16,h=n<a?a-n:n>=a+16?n-(a+16-1):0,m=t<u?u-t:t>=u+16?t-(u+16-1):0;Math.max(h,m)<=14&&s.push([e+o,i+r])}return s}function Z0(n){let t=new Gn(n);t.magFilter=an,t.minFilter=an,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new Q(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},i=new bn({uniforms:e,vertexShader:q0,fragmentShader:Y0}),s=new bn({uniforms:e,vertexShader:q0,fragmentShader:Y0,transparent:!0,depthWrite:!1,side:Qn});return{opaque:i,trans:s,uniforms:e,tex:t}}function $0(n){let t=new cn;return t.setAttribute("position",new je(n.pos,3)),t.setAttribute("uv",new je(n.uv,2)),t.setAttribute("light",new je(n.light,1)),t.setAttribute("lt",new je(n.lt,2,!0)),t.setIndex(new je(n.index,1)),t.computeBoundingSphere(),t}var Fc=class{constructor({scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}){Object.assign(this,{scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}),this.chunks=new Map,this.dirtyMesh=new Set,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",a=>this.onMsg(a.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=Ni(t.cx,t.cz),i=this.chunks.get(e);t.type==="chunk"&&this.inflight--,i&&(t.type==="chunk"&&(i.vox=t.vox,i.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<i.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(i,t.mesh)))}setMesh(t,e){for(let i of["o","t"])t[i]&&(this.scene.remove(t[i]),t[i].geometry.dispose(),t[i]=null);e.opaque.index.length&&(t.o=new Ne($0(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new Ne($0(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}flushMeshes(){if(this.dirtyMesh.size){for(let t of this.dirtyMesh){let e=this.chunks.get(t);e&&e.state==="ready"&&(e.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:e.cx,cz:e.cz,rev:e.meshRev}))}this.dirtyMesh.clear()}}update(t,e){this.flushMeshes();let i=$i(t),s=$i(e),r=Jm(i,s,this.rd);for(let u of r){if(this.inflight>=this.maxInflight)break;let h=Ni(u.cx,u.cz);if(this.chunks.has(h))continue;let m={cx:u.cx,cz:u.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(h,m),this.inflight++,this.worker.postMessage({type:"load",cx:u.cx,cz:u.cz,rev:m.meshRev})}let o=this.rd+1.5,a=[];for(let[u,h]of this.chunks){let m=h.cx-i,f=h.cz-s;if(m*m+f*f>o*o){for(let d of["o","t"])h[d]&&(this.scene.remove(h[d]),h[d].geometry.dispose());this.chunks.delete(u),a.push(u)}}a.length&&this.worker.postMessage({type:"drop",keys:a.filter(u=>{let[h,m]=u.split(",").map(Number);return Math.abs(h-i)>this.rd+3||Math.abs(m-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(u=>u.state==="ready").length}ready(t,e){let i=this.chunks.get(Ni($i(t),$i(e)));return!!(i&&i.state==="ready")}get(t,e,i){let s=Yu(t,e,i);if(!s)return e<0?13:0;let r=this.chunks.get(Ni(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,i,s){let r=Yu(t,e,i);if(!r)return!1;let o=Ni(r.cx,r.cz),a=this.chunks.get(o);if(!a||!a.vox)return!1;a.vox[r.i]=s,k0(this.diffs,o,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:i,n:s});let u=Math.floor(t),h=Math.floor(i);for(let[m,f]of PS(u,h))this.dirtyMesh.add(Ni(m,f));return this.onDirty&&this.onDirty(o),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var Cf="hw_world",Qo=null;function J0(n){n!==Cf&&(Cf=n,Qo=null)}function K0(){return Qo||(Qo=new Promise((n,t)=>{if(!("indexedDB"in self))return t(new Error("no indexedDB"));let e=indexedDB.open(Cf,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),Qo)}function Rf(n,t){return K0().then(e=>new Promise((i,s)=>{let r=e.transaction("kv",n),o=r.objectStore("kv"),a=t(o);r.oncomplete=()=>i(a instanceof IDBRequest?a.result:void 0),r.onerror=()=>s(r.error)}))}var If=n=>Rf("readonly",t=>t.get(n)),Oc=n=>Rf("readwrite",t=>{for(let e in n)t.put(n[e],e)});async function Pf(n){let t=await K0();return new Promise((e,i)=>{let s={},r=t.transaction("kv","readonly"),o=r.objectStore("kv").openCursor(IDBKeyRange.bound(n,n+"\uFFFF"));o.onsuccess=()=>{let a=o.result;a&&(s[a.key]=a.value,a.continue())},r.oncomplete=()=>e(s),r.onerror=()=>i(r.error)})}async function Lf(n){let t={};for(let e of n){let i=await If(e);i!==void 0&&(t[e]=i)}await Rf("readwrite",e=>e.clear()),await Oc(t)}function I(n,t,...e){let i=document.createElement(n);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:i.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(String(s)));return i}var ji=n=>document.querySelector(n);function DS(n,t,e,i,s){let r={t:i,id:n.id,m:n.module,k:n.tkey,y:n.type,ok:t?1:0,a:String(e??"").slice(0,120)};return s&&(r.r=s(r)),r}function Q0(n,t,e,i,s,r){if(!t||!t.id)return null;let o=DS(t,e,i,s,r),a=n.get("ke_log"),u=Array.isArray(a)?a:[];if(u.push(o),n.set("ke_log",u),t.local)return o;if(e){let f=n.get("ke_correct"),d=Array.isArray(f)?f:[];d.includes(t.id)||(d.push(t.id),n.set("ke_correct",d))}let h=n.get("ke_mistakes")||{},m=h[t.id]&&!h[t.id].d?h[t.id]:null;return e?m&&(m.c++,m.u=s,m.c>=3&&(h[t.id]={d:1,w:m.w,t:m.t,u:s})):h[t.id]={c:0,w:((h[t.id]||{}).w||0)+1,t:s,u:s},(!e||m)&&n.set("ke_mistakes",h),o}var j0=n=>n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate();function tg(n,t=Date.now()){let e=j0(new Date(t)),i=0;for(let s of Array.isArray(n)?n:[])s&&j0(new Date(s.t))===e&&i++;return i}function eg(n,{learnedQ:t=new Set,mistakes:e={},correct:i=new Set}={},s=5,r=Math.random){let o=[],a=[],u=[];for(let x of n)e[x]&&!e[x].d?o.push(x):t.has(x)||i.has(x)?u.push(x):a.push(x);let h=x=>{for(let p=x.length-1;p>0;p--){let M=Math.floor(r()*(p+1));[x[p],x[M]]=[x[M],x[p]]}return x};[o,a,u].forEach(h);let m=[],f=(x,p)=>{for(;p-- >0&&x.length;)m.push(x.pop())},d=Math.round(s*.7);return f(o,Math.ceil(d/2)),f(a,d-m.length),f(o,d-m.length),f(u,s-m.length),f(a,s-m.length),f(o,s-m.length),m}var NS="../../",US=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js","syncmerge.js"],Nf=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],zc=null,Uf=()=>({get:n=>{try{return JSON.parse(localStorage.getItem(n)||"null")}catch{return null}},set:(n,t)=>localStorage.setItem(n,JSON.stringify(t))}),Df=null,ig=n=>{Df=n},sg=()=>tg(Uf().get("ke_log"));function Ff(n,t,e,i=!0){i&&window.KidsDaily&&window.KidsDaily.rec("english",t);try{Q0(Uf(),n,t,e,Date.now(),window.KESyncMerge&&window.KESyncMerge.rid)}catch(s){console.warn("[hero-world] \u5B78\u7FD2\u7D00\u9304\u5BEB\u4E0D\u9032\u53BB",s)}if(Df)try{Df(t,n)}catch{}}function Of(n,t,e){try{let i=Uf(),s=i.get("ke_learned")||{},r=new Set;for(let h in s)s[h]&&s[h].at&&(n.sets&&n.sets[h]||[]).forEach(m=>r.add(m));let o=n.list(t).filter(h=>h.type!=="speak").map(h=>h.id),a=eg(o,{learnedQ:r,mistakes:i.get("ke_mistakes")||{},correct:new Set(i.get("ke_correct")||[])},e),u=a.length?n.buildQuiz(Object.assign({},t,{ids:a,count:a.length})):[];if(u.length)return u}catch{}return n.buildQuiz(Object.assign({},t,{count:e}))}function FS(n){return new Promise((t,e)=>{let i=document.createElement("script");i.src=n,i.onload=t,i.onerror=()=>e(new Error("load "+n)),document.head.appendChild(i)})}function zf(){return zc||(zc=(async()=>{for(let t of US)await FS(NS+t);let n=window;return new n.KE.Engine({words:n.DATA_WORDS||[],phrases:n.DATA_PHRASES||[],roots:n.DATA_ROOTS||[],grammar:n.DATA_GRAMMAR||[],patterns:n.DATA_PATTERNS||[]})})().catch(n=>{throw zc=null,n})),zc}async function rg(n,{onReward:t,onAnswer:e,onClose:i,count:s=5}){n.innerHTML="",n.hidden=!1;let r=I("div",{class:"panel quiz"});n.append(r),r.append(I("div",{class:"p-head"},I("h2",{},"\u7DF4\u7FD2\u77F3\u7891"),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:d},"\xD7")),I("p",{class:"muted"},"\u984C\u5EAB\u8F09\u5165\u4E2D\u2026"));let o;try{o=await zf()}catch{r.lastChild.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u5F8C\u518D\u8A66\u4E00\u6B21\u3002";return}let a=window.KE,u=[],h=0,m=0,f=0;function d(){n.hidden=!0,n.innerHTML="",i&&i()}function x(){u=Of(o,{modules:["words","phrases","grammar","patterns"],types:Nf,lv:1},s),u.length||(u=o.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:s})),h=0,m=0,f=0,p()}function p(){r.innerHTML="";let g=u[h],P=a.isTyped(g);n._q=g;let F=I("div",{class:"fb"}),E=I("div",{class:"q-body"});r.append(I("div",{class:"p-head"},I("h2",{},"\u7DF4\u7FD2\u77F3\u7891 ",I("small",{},`\u7B2C ${h+1} / ${u.length} \u984C`)),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:d},"\xD7")),I("div",{class:"q-type"},(a.TYPES[g.type]||"\u984C\u76EE")+(P?"\u3000\u6253\u5B57\u984C \xB7 \u7B54\u5C0D 2 \u91D1\u5E63":"\u3000\u7B54\u5C0D 1 \u91D1\u5E63")),I("div",{class:"q-prompt"+(g.en?" en":"")},g.prompt),g.sub?I("div",{class:"q-sub"},g.sub):null,E,F);let C=!1,w=(D,b)=>{if(C)return;C=!0,Ff(g,D,b);let R=w0(D,P);e&&e(D),D&&(f++,m+=R,t&&t(R)),F.className="fb "+(D?"ok":"bad"),F.append(I("div",{},D?`\u7B54\u5C0D\u4E86\uFF01 +${R} \u91D1\u5E63`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",D?null:I("b",{class:"en"},g.answer)),!D&&g.why?I("div",{class:"why"},g.why):null,I("button",{class:"btn",onclick:M},h+1<u.length?"\u4E0B\u4E00\u984C":"\u770B\u7D50\u679C"))};if(g.input==="type"){let D=I("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),b=()=>{C||!D.value.trim()||w(o.check(g,D.value).ok,D.value)};D.addEventListener("keydown",R=>{R.stopPropagation(),R.key==="Enter"&&b()}),E.append(I("div",{class:"typerow"},D,I("button",{class:"btn",onclick:b},"\u9001\u51FA"))),setTimeout(()=>D.focus(),50)}else{let D=I("div",{class:"opts"});(g.options||[]).forEach(b=>D.append(I("button",{class:"opt"+(/[a-z]/i.test(b)?" en":""),onclick:R=>{if(C)return;let N=o.check(g,b).ok;R.currentTarget.classList.add(N?"ok":"bad"),w(N,b)}},b))),E.append(D)}}function M(){h++,h<u.length?p():y()}function y(){r.innerHTML="",r.append(I("div",{class:"p-head"},I("h2",{},"\u9019\u4E00\u56DE\u7D50\u675F"),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:d},"\xD7")),I("p",{class:"big"},`\u7B54\u5C0D ${f} / ${u.length} \u984C\uFF0C\u62FF\u5230 ${m} \u91D1\u5E63`),I("div",{class:"row"},I("button",{class:"btn",onclick:x},"\u518D\u4F86\u4E00\u56DE"),I("button",{class:"btn ghost",onclick:d},"\u56DE\u53BB\u84CB\u623F\u5B50")))}x()}var ng=new Set(Nf);async function ta(n,{ids:t=[],onDone:e,types:i,modules:s,title:r,okText:o,daily:a=!0,question:u=null}){n.innerHTML="",n.hidden=!1;let h=I("div",{class:"panel quiz"});n.append(h),h.append(I("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let m;try{m=await zf()}catch{h.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(null)},1200);return}let f=window.KE,d=u,x=i?new Set(i.filter(E=>ng.has(E))):ng;if(!d)for(let E of t){let C=m.byId[E];if(C&&x.has(C.type)){d=m.get(E);break}}let p=!!d&&!u;d||(d=Of(m,{modules:s||["words","phrases","grammar","patterns"],types:i?[...x]:Nf,lv:1},1)[0]||m.buildQuiz({modules:["words"],types:["zh2en","en2zh"],lv:1,count:1})[0]);let M=f.isTyped(d);n._q=d,h.innerHTML="";let y=I("div",{class:"fb"}),g=I("div",{class:"q-body"});h.append(I("div",{class:"p-head"},I("h2",{},r||"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),I("div",{class:"q-type"},u?"\u8B80\u5B8C\u56DE\u7B54\uFF1A\u9078\u51FA\u5C0D\u7684\u7B54\u6848":(p?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":f.TYPES[d.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),I("div",{class:"q-prompt"+(d.en?" en":"")},d.prompt),d.sub?I("div",{class:"q-sub"},d.sub):null,g,y);let P=!1,F=(E,C)=>{P||(P=!0,Ff(d,E,C,a),y.className="fb "+(E?"ok":"bad"),y.append(I("div",{},E?o||"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",E?null:I("b",{class:"en"},d.answer)),!E&&d.why?I("div",{class:"why"},d.why):null,I("button",{class:"btn",onclick:()=>{n.hidden=!0,n.innerHTML="",e&&e(E,M,d)}},"\u7E7C\u7E8C")))};if(d.input==="type"){let E=I("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),C=()=>{P||!E.value.trim()||F(m.check(d,E.value).ok,E.value)};E.addEventListener("keydown",w=>{w.stopPropagation(),w.key==="Enter"&&C()}),g.append(I("div",{class:"typerow"},E,I("button",{class:"btn",onclick:C},"\u9001\u51FA"))),setTimeout(()=>E.focus(),50)}else{let E=I("div",{class:"opts"});(d.options||[]).forEach(C=>E.append(I("button",{class:"opt"+(/[a-z]/i.test(C)?" en":""),onclick:w=>{if(P)return;let D=m.check(d,C).ok;w.currentTarget.classList.add(D?"ok":"bad"),F(D,C)}},C))),g.append(E)}}async function og(n,{quest:t,onDone:e}){n.innerHTML="",n.hidden=!1;let i=I("div",{class:"panel quiz"});n.append(i),i.append(I("p",{class:"muted"},"\u59D4\u8A17\u6E96\u5099\u4E2D\u2026"));let s;try{s=await zf()}catch{i.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(-1)},1200);return}let r=window.KE,o=Of(s,{modules:[t.module],types:t.types,lv:t.lv},t.count);o.length||(o=s.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:t.count}));let a=0,u=0,h=()=>{i.innerHTML="";let m=o[a];n._q=m;let f=I("div",{class:"fb"}),d=I("div",{class:"q-body"});i.append(I("div",{class:"p-head"},I("h2",{},t.title_zh+" ",I("small",{},`\u7B2C ${a+1} / ${o.length} \u984C \xB7 \u8981\u7B54\u5C0D ${t.need} \u984C`))),I("div",{class:"q-type"},r.TYPES[m.type]||"\u984C\u76EE"),I("div",{class:"q-prompt"+(m.en?" en":"")},m.prompt),m.sub?I("div",{class:"q-sub"},m.sub):null,d,f);let x=!1,p=(M,y)=>{x||(x=!0,Ff(m,M,y),M&&u++,f.className="fb "+(M?"ok":"bad"),f.append(I("div",{},M?"\u7B54\u5C0D\u4E86\uFF01":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",M?null:I("b",{class:"en"},m.answer)),!M&&m.why?I("div",{class:"why"},m.why):null,I("button",{class:"btn",onclick:()=>{a++,a<o.length?h():(n.hidden=!0,n.innerHTML="",e&&e(u,o.length))}},a+1<o.length?"\u4E0B\u4E00\u984C":"\u5B8C\u6210")))};if(m.input==="type"){let M=I("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),y=()=>{x||!M.value.trim()||p(s.check(m,M.value).ok,M.value)};M.addEventListener("keydown",g=>{g.stopPropagation(),g.key==="Enter"&&y()}),d.append(I("div",{class:"typerow"},M,I("button",{class:"btn",onclick:y},"\u9001\u51FA"))),setTimeout(()=>M.focus(),50)}else{let M=I("div",{class:"opts"});(m.options||[]).forEach(y=>M.append(I("button",{class:"opt"+(/[a-z]/i.test(y)?" en":""),onclick:g=>{if(x)return;let P=s.check(m,y).ok;g.currentTarget.classList.add(P?"ok":"bad"),p(P,y)}},y))),d.append(M)}};h()}function ag(n,t,e){let[i,s]=String(n).split(",").map(Number),r=m=>qn(4242,i|0,t*7+m,s|0),o=e.professions[Math.floor(r(1)*e.professions.length)],a=e.quests,u=Math.floor(r(2)*a.length),h=(u+1+Math.floor(r(3)*(a.length-1)))%a.length;return{prof:o,quests:[a[u],a[h]]}}function lg(n,t,e,i=()=>64){return n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?Or(n,e.blueprint)?{ok:!1,reason:"owned"}:(Hs(n,e.price),n.owned.push(e.blueprint),{ok:!0}):Zo(t,e.give,e.count,i)?(Hs(n,e.price),wn(t,e.give,e.count,i),{ok:!0}):{ok:!1,reason:"full"}}var Bf=(n,t,e)=>!!(n&&n[t.id]===e);function cg(n,t,e,i,s,r,o=()=>64){if(Bf(n,t,i))return{ok:!1,reason:"done"};if(e<t.need)return{ok:!1,reason:"need"};n[t.id]=i,Fn(s,t.reward.coins|0);let a={};for(let u in t.reward.items||{}){let h=wn(r,u,t.reward.items[u],o);h&&(a[u]=h)}return{ok:!0,coins:t.reward.coins|0,items:t.reward.items||{},leftovers:a}}function Gs(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}var kf={survival:{db:"hw_world",seedOffset:0},creative:{db:"hw_creative",seedOffset:1}},Bc=n=>n==="creative"?"creative":"survival",hg=n=>kf[Bc(n)].db;function ug(n,t,e){return n?n.isSet(e)?n.verify(t,e)?{ok:!0}:{ok:!1,reason:"wrong"}:{ok:!1,reason:"unset"}:{ok:!1,reason:"nopin"}}function fg(n){let t=Bc(n)==="creative";return{creative:t,consume:!t,drops:!t,damage:!t,coins:!t,quizMobs:!t,portals:!t,trading:!t,breakTime:t?.08:null}}function dg(n){return n.blocks.filter(t=>t.n&&t.placeable&&!["stele","bedrock","door_open"].includes(t.id)&&!t.portal&&!t.liquid&&!t.hidden).map(t=>t.id)}var pg=["grass","stone_bricks","planks","glass","wool_red","paper_yellow","lantern","door","flower_rose"];var Jf={};Kn(Jf,{BREED_CAP:()=>$f,LOVE_MS:()=>gg,MAX_STAGE:()=>kS,STAGE_SECONDS:()=>BS,armorMax:()=>mg,armorPoints:()=>ea,canTill:()=>Hf,eat:()=>Yf,equip:()=>VS,findMate:()=>Zf,harvest:()=>Gf,nearWater:()=>Wf,reduceDamage:()=>qf,stageAt:()=>Vf,wearArmor:()=>Xf});var BS=60,kS=3;function Vf(n,t,e){let i=Math.floor((t-n)/1e3/(e?30:60));return Math.max(0,Math.min(3,i))}var Hf=(n,t)=>(n==="grass"||n==="dirt")&&t;function Gf(n,t=Math.random){return n>=3?[{id:"wheat",n:1},{id:"seeds",n:1+Math.floor(t()*2)}]:[{id:"seeds",n:1}]}function Wf(n,t,e,i,s,r=4){for(let o=-r;o<=r;o++)for(let a=-r;a<=r;a++)for(let u of[0,-1])if(t(n(e+a,i+u,s+o)))return!0;return!1}function ea(n,t){return(n||[]).reduce((e,i)=>{let s=i&&t.get(i);return e+(s&&s.armor?s.armor.points:0)},0)}var mg=(n,t)=>{let e=n&&t.get(n);return e&&e.armor?e.armor.dur||100:0};function Xf(n,t,e,i=1){let s=[];return n.forEach((r,o)=>{if(!r)return;let a=(t[o]==null?mg(r,e):t[o])-i;a<=0?(s.push(r),n[o]=null,t[o]=null):t[o]=a}),s}var qf=(n,t)=>Math.max(0,Math.round(n*(1-Math.min(.8,t*.04))));function VS(n,t,e,i){let s=e&&i.get(e);if(e&&(!s||!s.armor||s.armor.slot!==t))return{ok:!1};let r=n[t]||null;return n[t]=e||null,{ok:!0,old:r}}function Yf(n,t,e){return n.hp>=e?!1:(n.hp=Math.min(e,n.hp+t),!0)}var gg=3e4,$f=12;function Zf(n,t,e){return n.find(i=>i!==t&&!i.gone&&i.type===t.type&&i.love&&e-i.love<gg&&Math.hypot(i.p.x-t.p.x,i.p.z-t.p.z)<8)||null}var td={};Kn(td,{apply:()=>Hc,duck:()=>As,muted:()=>na,rainLevel:()=>Qf,scene:()=>jf,setVolume:()=>Gc,sfx:()=>Ke,state:()=>HS,toggleMute:()=>Kf,unlock:()=>Vc});var qe=null,Ws=null,kc=null,zr=null,$n=()=>window.HIAudio||null,yg=()=>$n()?$n().get():{muted:!1,music:.35,sfx:.7};function Vc(){try{$n()&&$n().unlock()}catch{}if(!qe){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;qe=new n,Ws=qe.createGain(),Ws.connect(qe.destination),kc=qe.createBuffer(1,qe.sampleRate,qe.sampleRate);let t=kc.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}qe.state==="suspended"&&qe.resume(),Hc()}function Hc(){if(Ws){let n=yg();Ws.gain.setTargetAtTime(n.muted?0:n.sfx,qe.currentTime,.03)}}var na=()=>yg().muted;function Kf(){return $n()&&$n().toggle(),Hc(),na()}function Gc(n){$n()&&$n().set(n),Hc()}function jf(n){try{$n()&&$n().scene(n)}catch{}}function As(n){let t=$n();t&&(n&&As.id==null?As.id=t.duckStart():!n&&As.id!=null&&(t.duckEnd(As.id),As.id=null))}function _g(n,t,e,i,s){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(1e-4,t+e+s)}function ei(n,t,e,i,s,r,o){let a=qe.createOscillator(),u=qe.createGain();a.type=n,a.frequency.setValueAtTime(t,e),o&&a.frequency.exponentialRampToValueAtTime(o,e+i+r),_g(u,e,i,s,r),a.connect(u),u.connect(Ws),a.start(e),a.stop(e+i+r+.05)}function Es(n,t,e,i,s,r=1){let o=qe.createBufferSource(),a=qe.createBiquadFilter(),u=qe.createGain();o.buffer=kc,a.type=n,a.frequency.value=t,a.Q.value=r,_g(u,e,.004,i,s),o.connect(a),a.connect(u),u.connect(Ws),o.start(e,Math.random()*.5),o.stop(e+s+.05)}var xg={wood:(n,t)=>{ei("sine",190*t,n,.003,.16,.12,95*t),Es("bandpass",700*t,n,.08,.08,2)},stone:(n,t)=>{Es("highpass",1800*t,n,.1,.06),ei("triangle",140*t,n,.002,.08,.08,90*t)},sand:(n,t)=>{Es("lowpass",520*t,n,.12,.18)},glass:(n,t)=>{ei("sine",1900*t,n,.002,.08,.25,1500*t),Es("highpass",4200,n,.06,.12)},soft:(n,t)=>{Es("bandpass",850*t,n,.09,.1,.8)}};function Ke(n,t="soft"){if(!qe||na())return;let e=qe.currentTime+.005,i=xg[t]||xg.soft;switch(n){case"break":i(e,1),i(e+.05,.8);break;case"hit":i(e,1.15);break;case"place":i(e,1.3);break;case"step":{Es(t==="stone"?"highpass":"bandpass",t==="stone"?1500:650,e,t==="sand"?.05:.035,.06);break}case"pickup":ei("sine",880,e,.002,.07,.08,1320);break;case"chest":ei("triangle",160,e,.02,.07,.3,120),ei("sine",330,e+.12,.005,.05,.15);break;case"door":ei("sawtooth",120,e,.03,.04,.3,160),Es("lowpass",400,e+.25,.08,.1);break;case"eat":[0,.13,.26].forEach(s=>Es("bandpass",1200+Math.random()*600,e+s,.07,.07,1.5));break;case"trade":ei("triangle",659,e,.005,.08,.15),ei("triangle",988,e+.1,.005,.08,.25);break;case"coin":ei("sine",1319,e,.002,.08,.08),ei("sine",1976,e+.07,.002,.08,.22);break;case"hurt":ei("triangle",300,e,.005,.1,.18,200);break;default:break}}function Qf(n){if(qe){if(!zr&&n>.01){let t=qe.createBufferSource(),e=qe.createBiquadFilter(),i=qe.createBiquadFilter(),s=qe.createGain();t.buffer=kc,t.loop=!0,e.type="lowpass",e.frequency.value=2600,i.type="highpass",i.frequency.value=400,s.gain.value=0,t.connect(i),i.connect(e),e.connect(s),s.connect(Ws),t.start(),zr={s:t,g:s}}zr&&zr.g.gain.setTargetAtTime(.06*n,qe.currentTime,.4)}}var HS=()=>({ctx:qe?qe.state:"none",hi:$n()?$n().state():null,rain:zr?+zr.g.gain.value.toFixed(3):0});var od={};Kn(od,{HI_SCENE:()=>nd,createWeather:()=>id,precipFor:()=>rd,sceneFor:()=>ed,soundOf:()=>Br,stepWeather:()=>sd});function Br(n){if(!n)return"soft";let t=n.pattern||"";return t==="glass"||t==="stained"||t==="ice"?"glass":t==="sand"||t==="snow"||n.id==="sand"||n.id==="farmland"?"sand":n.tool==="axe"||t==="planks"||t==="log"||t==="door"?"wood":n.tool==="pickaxe"?"stone":"soft"}function ed({day:n,underground:t}){return t?"cave":n<.25?"night":"calm"}var nd={calm:"hub",night:"night",cave:"cave"};function id(n=Math.random){return{kind:"clear",left:180+n()*300,level:0}}function sd(n,t,e=Math.random){n.left-=t,n.left<=0&&(n.kind==="clear"?(n.kind="rain",n.left=60+e()*90):(n.kind="clear",n.left=180+e()*300));let i=n.kind==="rain"?1:0;return n.level+=Math.sign(i-n.level)*Math.min(Math.abs(i-n.level),t/6),n}function rd(n,t){return!t||t.level<=.01||n==="desert"?null:n==="snow"?"snow":"rain"}var GS=[1,2,4,6,8];function Wc(n,t){if(t&&(t.type==="rod"||t.type==="bow")&&(t=null),!n||n.hardness<0)return{time:1/0,harvest:!1,usesTool:!1};let e=.25+n.hardness*.55,i=n.tier|0,r=!!(t&&n.tool&&t.type===n.tool)?t.tier:0;return i>0&&r<i?{time:e*3,harvest:!1,usesTool:!!t&&t.type!=="sword"}:{time:Math.max(.1,e/GS[r]),harvest:!0,usesTool:!!t&&t.type!=="sword"}}function kr(n,t,e,i=1){let s=n.slots[t];if(!s)return{broke:!1};let r=e.toolOf(s.id);if(!r)return{broke:!1};let o=r.durability;return s.dur=(s.dur==null?o:s.dur)-i,s.dur<=0?(n.slots[t]=null,{broke:!0,id:s.id}):{broke:!1,left:s.dur,max:o}}function vg(n,t){if(!n)return null;let e=t.toolOf(n.id),i=!e&&t.get(n.id),s=e?e.durability:i&&i.armor?i.armor.dur||100:0;if(!s)return null;let r=n.dur==null?s:n.dur;return{left:r,max:s,frac:r/s}}var fd={};Kn(fd,{collect:()=>hd,createFurnace:()=>ad,dismantle:()=>ud,start:()=>ld,tick:()=>cd});function ad(){return{fuel:0,jobs:[],done:{}}}function ld(n,t,e,i=4){if(Yn(t,e.in)<1)return{ok:!1,reason:"materials"};let s=n.jobs.length;if(n.fuel-s<1){if(Yn(t,"coal")<1)return{ok:!1,reason:"fuel"};Vs(t,"coal",1),n.fuel+=i}return Vs(t,e.in,1),n.jobs.push({in:e.in,out:e.out,left:e.time}),{ok:!0}}function cd(n,t){for(;t>0&&n.jobs.length;){let e=n.jobs[0],i=Math.min(t,e.left);e.left-=i,t-=i,e.left<=1e-9&&(n.jobs.shift(),n.fuel-=1,n.done[e.out]=(n.done[e.out]||0)+1)}return n}function hd(n,t,e=()=>64){let i=0;for(let s of Object.keys(n.done)){let r=wn(t,s,n.done[s],e);i+=n.done[s]-r,r?n.done[s]=r:delete n.done[s]}return i}function ud(n){let t=Object.assign({},n.done);for(let e of n.jobs)t[e.in]=(t[e.in]||0)+1;return t}var _d={};Kn(_d,{MAX_HP:()=>ia,REGEN_EVERY:()=>XS,SAFE_FALL:()=>WS,createHealth:()=>dd,damage:()=>md,fallDamage:()=>pd,hearts:()=>yd,regen:()=>gd,respawnPoint:()=>xd});var ia=20,WS=4,XS=4;function dd(n=20){return{hp:Math.max(0,Math.min(20,n)),regenT:0}}function pd(n,{water:t=!1,flying:e=!1}={}){return t||e||n<=4?0:Math.floor((n-4)/2)+1}function md(n,t){return t>0&&(n.hp=Math.max(0,n.hp-t),n.regenT=0),n.hp<=0}function gd(n,t){return n.hp<=0||n.hp>=20?(n.regenT=0,!1):(n.regenT+=t,n.regenT>=4?(n.regenT-=4,n.hp=Math.min(20,n.hp+1),!0):!1)}function xd(n,t,e){return n&&e?{x:n.x+.5,y:n.y+1,z:n.z+.5}:{x:t.x,y:t.y,z:t.z}}function yd(n){let t=[];for(let e=0;e<20/2;e++){let i=n-e*2;t.push(i>=2?"full":i===1?"half":"empty")}return t}var Xc={animal:8,quiz:4};function Mg(){return{list:[],nextId:1}}var sa=(n,t)=>n.list.reduce((e,i)=>e+(i.kind===t&&!i.gone?1:0),0);function bg(n,t,e){let i={id:n.nextId++,type:t.id,kind:t.kind,def:t,p:{x:e.x,y:e.y,z:e.z},v:{x:0,y:0,z:0},yaw:0,hp:t.hp||2,t:0,turn:0,gone:!1,busy:!1,onGround:!1};return n.list.push(i),i}function Sg(n,t){return n<.2&&!t}function wg(n,t,e){return n.tame?!1:n.kind==="quiz"?t>.45||e>48:e>72}function Ag(n,t,e,i){let s=n.def,r=t.x-n.p.x,o=t.z-n.p.z,a=Math.hypot(r,o);if(n.t+=e,n.held>0){n.held-=e,n.v.x=0,n.v.z=0,n.yaw=Math.atan2(-r,-o);return}if(n.busy){n.v.x=0,n.v.z=0,n.kind==="villager"&&(n.yaw=Math.atan2(-r,-o));return}if(n.home){let u=n.home.x-n.p.x,h=n.home.z-n.p.z,m=Math.hypot(u,h);if(m>10){n.yaw=Math.atan2(-u,-h),n.v.x=u/m*s.speed,n.v.z=h/m*s.speed,n.t=0,n.turn=1;return}}if(n.kind==="quiz"&&a<16){n.yaw=Math.atan2(-r,-o);let u=a>1.6?s.speed:0;n.v.x=r/(a||1)*u,n.v.z=o/(a||1)*u;return}n.t>=n.turn&&(n.t=0,n.turn=2+i()*4,i()<.35?(n.v.x=0,n.v.z=0):(n.yaw=i()*Math.PI*2,n.v.x=-Math.sin(n.yaw)*s.speed,n.v.z=-Math.cos(n.yaw)*s.speed))}function Eg(n,t,e){if(n.kind!=="animal"||n.gone)return null;if(n.hp-=t?n.hp:1,n.hp>0)return{drops:null};n.gone=!0;let i=n.def.drops||{},s=(i.min||1)+Math.floor(e()*((i.max||1)-(i.min||1)+1));return{drops:i.id?{id:i.id,n:s}:null,meat:n.def.meat?{id:n.def.meat,n:1}:null}}var Tg=(n,t)=>n?(t?2:1)+1:0;function Vr(n,t,e,i,s){let r=[e.x-i/2,e.y,e.z-i/2],o=[e.x+i/2,e.y+s,e.z+i/2],a=[n.x,n.y,n.z],u=[t.x,t.y,t.z],h=0,m=1/0;for(let f=0;f<3;f++){if(Math.abs(u[f])<1e-9){if(a[f]<r[f]||a[f]>o[f])return null;continue}let d=(r[f]-a[f])/u[f],x=(o[f]-a[f])/u[f];if(d>x&&([d,x]=[x,d]),h=Math.max(h,d),m=Math.min(m,x),h>m)return null}return h}function Cg(n){return Object.keys(n||{}).filter(t=>n[t]&&!n[t].d).sort((t,e)=>(n[e].u||0)-(n[t].u||0))}var Rg=n=>`../hero-island/?map=${encodeURIComponent(n)}&from=world`;function Ig(n,t){let e=new Set(t||[]);return(Array.isArray(n)?n:[]).filter(i=>i&&i.id&&!e.has(i.id))}function Pg(n,t,e,i,s=()=>64){let r=(t||[]).find(h=>h.map===n.map);if(!r)return{ok:!1,coins:0,items:{},leftovers:{}};let o=r.reward.coins|0,a=Object.assign({},r.reward.items),u={};Fn(i,o);for(let h in a){let m=wn(e,h,a[h],s);m&&(u[h]=m)}return{ok:!0,coins:o,items:a,leftovers:u,name_zh:r.name_zh}}function Lg(n,t,e){let i=new Set;for(let r of Array.isArray(n)?n:[])r&&r.map&&i.add(r.map);let s=t&&t.defeated;if(s)for(let r of e||[])r.boss&&s[r.boss]&&i.add(r.map);return i}function vd(n,t,e){let i=(t||[]).findIndex(r=>r.map===n);if(i<0)return{ok:!1,need:null};if(i===0)return{ok:!0};let s=t[i-1];return e.has(s.map)?{ok:!0}:{ok:!1,need:s}}function Dg(n,t){let e=(n||[]).findIndex(i=>!t.has(i.map));return e<=0?null:vd(n[e].map,n,t).ok?n[e]:null}var wd={};Kn(wd,{BOOST:()=>zg,CHARGE_T:()=>Og,COOLDOWN:()=>Md,FULL:()=>qc,GRAV:()=>Ug,LIFE:()=>Fg,SPEED:()=>Ng,chargeOf:()=>Yc,shoot:()=>bd,step:()=>Sd});var Ng=26,Ug=9,Fg=2.5,Md=.45,Og=1,zg=14,qc=.95,Yc=n=>Math.max(0,Math.min(1,(n-.12)/(Og-.12)));function bd(n,t,e=0){let i=Math.hypot(t.x,t.y,t.z)||1,s=Math.max(0,Math.min(1,e||0)),r=Ng+zg*s;return{p:{x:n.x,y:n.y,z:n.z},v:{x:t.x/i*r,y:t.y/i*r+1,z:t.z/i*r},age:0,power:s>=qc?2:1}}function Sd(n,t,e,i){n.age+=t,n.v.y-=Ug*t;let s=n.v.x*t,r=n.v.y*t,o=n.v.z*t,a=Math.hypot(s,r,o)||1e-6,u={x:s/a,y:r/a,z:o/a},h=null,m=a;for(let f of i){let d=Vr(n.p,u,f.p,f.w,f.h);d!=null&&d<=m&&(m=d,h=f)}if(h)return{hit:"mob",target:h.ref};for(let f=1;f<=4;f++){let d=n.p.x+s*f/4,x=n.p.y+r*f/4,p=n.p.z+o*f/4;if(e(Math.floor(d),Math.floor(x),Math.floor(p)))return n.p={x:n.p.x+s*(f-1)/4,y:n.p.y+r*(f-1)/4,z:n.p.z+o*(f-1)/4},{hit:"block"}}return n.p.x+=s,n.p.y+=r,n.p.z+=o,n.age>Fg?{hit:"gone"}:null}var Pd={};Kn(Pd,{FOLLOW:()=>Bg,GUARD:()=>kg,MAX:()=>Xs,TELEPORT:()=>Ad,feed:()=>Ed,foodsOf:()=>$c,guardTarget:()=>Cd,isPet:()=>qs,petName:()=>ra,serialize:()=>Rd,steer:()=>Td,valid:()=>Id});var ra=n=>Array.from(String(n??"").replace(/[\u0000-\u001f<>]/g,"").trim()).slice(0,12).join("");var Xs=4,Bg=2.5,Ad=20,kg=10,qs=n=>!!(n&&n.def&&n.def.pet),$c=n=>[].concat(n.food||[]);function Ed(n,t,e){if(!qs(n)||n.tame||!$c(n.def).includes(t))return{ok:!1};let i=n.def.tameNeed||2;return n.fed=(n.fed||0)+1,n.fed<i?{ok:!0,tamed:!1,fed:n.fed,need:i}:e>=Xs?(n.fed=i-1,{ok:!0,tamed:!1,full:!0,fed:n.fed,need:i}):(n.tame=!0,n.sit=!1,{ok:!0,tamed:!0,fed:n.fed,need:i})}function Td(n,t,e,i){if(n.t+=e,n.sit){n.v.x=0,n.v.z=0;return}let s=i||t,r=s.x-n.p.x,o=s.z-n.p.z,a=Math.hypot(r,o);if(a>(i?1.1:Bg)){let h=n.def.speed*(a>6?3:1.6);n.yaw=Math.atan2(-r,-o),n.v.x=r/a*h,n.v.z=o/a*h}else n.v.x=0,n.v.z=0,n.yaw=Math.atan2(-(t.x-n.p.x),-(t.z-n.p.z))}function Cd(n,t){let e=null,i=kg;for(let s of t){if(s.kind!=="quiz"||s.gone)continue;let r=Math.hypot(s.p.x-n.p.x,s.p.z-n.p.z);r<i&&(i=r,e=s)}return e}var Rd=n=>n.filter(t=>qs(t)&&t.tame&&!t.gone).slice(0,Xs).map(t=>Object.assign({type:t.type,x:t.p.x,y:t.p.y,z:t.p.z,sit:!!t.sit},t.name?{name:t.name}:null)),Id=n=>(Array.isArray(n)?n:[]).filter(t=>t&&typeof t.type=="string"&&[t.x,t.y,t.z].every(Number.isFinite)).slice(0,Xs).map(t=>{let e=ra(t.name),i={type:t.type,x:t.x,y:t.y,z:t.z,sit:!!t.sit};return e&&(i.name=e),i});var _i=["easy","mid","hard"],Zc={easy:"\u7B2C 1 \u7D1A\u30FB\u7C21\u55AE",mid:"\u7B2C 2 \u7D1A\u30FB\u4E2D\u7B49",hard:"\u7B2C 3 \u7D1A\u30FB\u6311\u6230"},Jc=3,Hr=n=>_i.includes(n&&n.lv)?n.lv:"mid";function oa(n,t){let e=new Set([_i[0]]);for(let i=1;i<_i.length;i++){let s=n.filter(o=>Hr(o)===_i[i-1]&&t(o)).length,r=n.some(o=>Hr(o)===_i[i]&&t(o));(e.has(_i[i-1])&&s>=Jc||r)&&e.add(_i[i])}return e}function Vg(n,t,e){let i=_i.indexOf(e);return i<=0||oa(n,t).has(e)?0:Math.max(1,Jc-n.filter(s=>Hr(s)===_i[i-1]&&t(s)).length)}function Ld(n,t,e,i){return e["book:"+t.id]===i?0:(n.books||[]).filter(r=>e["book:"+r.id]===i).length<(n.dailyCap??1/0)?n.coins|0:0}var Oi={};function Gr(n){return Oi[n]||(Oi[n]=new Mn({color:n,transparent:!0}),Oi[n].userData.base=new ue(n)),Oi[n]}var aa=null;function ZS(){if(aa)return aa;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),aa=new Gn(n),aa.colorSpace=en,aa}function Hg(n,t){let e=new gn,i=n.colors,[s,r]=n.size,o=(u,h,m,f,d,x,p,M)=>{let y=new Ne(new Je(u,h,m),M||Gr(f));return y.position.set(d,x,p),e.add(y),y},a=[];if(n.kind==="villager"){for(let h of[-.13,.13]){let m=o(.2,.6,.22,i.leg,h,.6,0);m.geometry.translate(0,-.6/2,0),a.push(m)}o(.56,.78,.34,t||i.body,0,.6+.39,0);for(let h of[-.36,.36])o(.16,.62,.18,t||i.body,h,1.3399999999999999,0).geometry.translate(0,-.27,0);o(.42,.42,.4,i.head,0,.6+.78+.22,0),o(.5,.1,.48,i.hat,0,.6+.78+.46,0),o(.32,.14,.3,i.hat,0,.6+.78+.56,0),o(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(n.kind==="quiz"){let u=o(s,r*.72,s*.8,i.body,0,r*.36+.12,0);Oi.__face||(Oi.__face=new Mn({map:ZS(),transparent:!0}),Oi.__face.userData.base=new ue("#ffffff"));let h=[Gr(i.head),Gr(i.head),Gr(i.head),Gr(i.head),Gr(i.head),Oi.__face],m=new Ne(new Je(s*.9,s*.8,s*.8),h);m.position.set(0,r*.72+s*.4,0),e.add(m),a.push(o(.18,.24,.18,i.head,-.2,.12,0),o(.18,.24,.18,i.head,.2,.12,0))}else{let u=r<1&&n.id!=="chicken",h=n.id==="chicken"?.25:u?r*.35:.45,m=r-h-(n.id==="chicken"?.15:.25);o(s,m,n.id==="chicken"?s:s*1.35,i.body,0,h+m/2,0),i.patch&&o(s*.5,m*.55,.02+s*1.36,i.patch,s*.12,h+m*.55,0);let f=n.id==="chicken"?.3:u?.32:.45,d=o(f,f,f,i.head,0,h+m+f*.25,-(n.id==="chicken"?s*.35:s*.75));if(i.ear)for(let y of[-f*.3,f*.3])o(f*.26,f*.3,f*.16,i.ear,y,d.position.y+f*.6,d.position.z);if(i.eye)for(let y of[-f*.24,f*.24])o(f*.24,f*.26,.02,i.eye,y,d.position.y+f*.05,d.position.z-f/2-.01);if(n.pet){let y=o(.08,.08,.32,i.body,0,h+m*.85,s*.68+.12);y.rotation.x=n.id==="cat"?.7:.35}i.comb&&(o(.08,.12,.14,i.comb,0,d.position.y+f/2+.05,d.position.z),o(.12,.06,.12,"#D9A63A",0,d.position.y-.02,d.position.z-f/2-.05));let x=n.id==="chicken"?.06:.18,p=n.id==="chicken"?0:s*.45,M=s*.3;for(let[y,g]of n.id==="chicken"?[[-.1,0],[.1,0]]:[[-M,-p],[M,-p],[-M,p],[M,p]]){let P=o(x,h,x,i.leg,y,h/2,g);P.geometry.translate(0,-h/2,0),P.position.y=h,a.push(P)}}return e.userData.legs=a,e}function Gg(n){for(let t in Oi){let e=Oi[t];e.color.copy(e.userData.base).multiplyScalar(n)}}function Kc(n,t,e){n.position.set(t.p.x,t.p.y,t.p.z),n.rotation.y=t.yaw;let i=Math.hypot(t.v.x,t.v.z)>.05,s=i?Math.sin(e*8+t.id)*.5:0;if(n.userData.legs.forEach((r,o)=>{r.rotation.x=o%2?s:-s}),t.kind==="quiz"&&(n.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);n.scale.setScalar(r),n.rotation.y+=t.goneT*12}}var jc="ec09894c06",th=new URLSearchParams(location.search),jS=720,Qc=5,Xg={boat:-.85,minecart:-.6,horse:.75},qg=[[0,0,0,1,.1,1]],Yg=[[0,0,0,1,.5,1]],QS=[[0,0,0,1,1,1]],t1=[[.3,0,.3,.7,.7,.7]],e1=20261008,Dd=th.get("test")==="1"||window.__HW_TEST__===!0,n1=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,c={touch:n1,started:!1,paused:!0,overlay:null,p:{x:.5,y:40,z:.5},v:{x:0,y:0,z:0},yaw:0,pitch:-.2,fly:!1,onGround:!1,eyeOff:0,view:"fp",sel:0,time:.08,keys:{},joy:{x:0,y:0,active:!1},jumpHeld:!1,downHeld:!1,mining:{active:!1,src:"center",sx:0,sy:0,k:"",t:0},placeRepeat:0,dirty:new Set,dirtyMeta:!1,frames:[],drops:[],portalLock:!0};function An(n,t){try{let e=localStorage.getItem(n);return e??t}catch{return t}}function ni(n,t){try{localStorage.setItem(n,t)}catch{}}async function i1(){let n=Bc(An("hw_mode","survival")),t=fg(n),e=!t.creative&&An("hw_dim","overworld")==="shadow"?"shadow":"overworld",i=l=>e==="shadow"&&/^hw_(furnaces|chests|crops|map|vehicles)$/.test(l)?l+"_s":l,s=e==="shadow"?"hw_chunk_s:":"hw_chunk:";J0(hg(n));let[r,o,a,u,h,m,f,d,x]=await Promise.all(["data/blocks.json","data/recipes.json","data/mobs.json","data/portals.json","data/structures.json","data/trades.json","data/life.json","data/quests.json","data/books.json"].map(l=>fetch(l,{cache:"no-cache"}).then(_=>_.json()))),p=$m(r),M=o.recipes||[],y=l=>p.maxStack(l),g={};try{let[l,_,S,A,L,z,K,at,st,bt,Vt,Jt,ie]=await Promise.all(["hw_meta","hw_player","hw_inventory","hw_coins","hw_furnaces","hw_portal_claimed","hw_quests","hw_chests","hw_crops","hw_ach","hw_map","hw_vehicles","hw_story"].map(we=>If(i(we))));g={meta:l,player:_,inv:S,coins:A,furnaces:L,claimed:z,quests:K,chests:at,crops:st,achv:bt,mapd:Vt,vehs:Jt,storyd:ie,chunks:await Pf(s)}}catch(l){console.warn("save unavailable",l)}let P=g.meta&&g.meta.seed||e1+kf[n].seedOffset,F=e==="shadow"?P+7777:P,E=e==="shadow"?ff(F,p):o0(P,p,h),C=V0(Object.fromEntries(Object.entries(g.chunks||{}).map(([l,_])=>[l.slice(s.length),_]))),w=g.inv?Pc(g.inv):$o();t.creative&&!g.inv&&pg.forEach((l,_)=>{p.get(l)&&(w.slots[_]={id:l,count:64})});let D=C0(g.coins),b=g0(g.achv),R=f.achievements||[],N=_f(g.storyd);!g.storyd&&g.player&&Nc(N,d);let O=l=>l==="look"?c.lookAcc||0:l==="walk"?c.walkAcc||0:b.stats[l]||0,J=L0(),j=P0(D,{mode:An("hw_coin_source","local"),member:I0(window)}),k=new Rc(p,g.mapd),et=dd(g.player&&g.player.hp!=null?g.player.hp:20);c.bed=g.player&&g.player.bed||null,c.horse=g.player&&g.player.horse||null,c.petsPending=Id(g.player&&g.player.pets);let B=u.portals||[],q=Array.isArray(g.claimed)?g.claimed.slice():[],tt=g.furnaces||{},Z=g.quests||{},it=Object.fromEntries(Object.entries(g.chests||{}).map(([l,_])=>[l,Pc(_,27)])),rt=g.crops||{};c.armor=g.player&&Array.isArray(g.player.armor)?g.player.armor.slice(0,4):[null,null,null,null],c.armorDur=g.player&&Array.isArray(g.player.armorDur)?g.player.armorDur.slice(0,4):[null,null,null,null];let St=o.smelt||[],Ct=o.fuelPerCoal||4;g.meta&&typeof g.meta.time=="number"&&(c.time=g.meta.time);let Gt=ji("#c"),qt=new bc({canvas:Gt,antialias:!1,powerPreference:"high-performance"}),Ft={low:{pr:.75,np:120,grain:!1},med:{pr:1,np:300,grain:!0},high:{pr:c.touch?1.5:1.25,np:500,grain:!0}};function W(){let l=Ft[An("hw_gfx","high")]||Ft.high;qt.setPixelRatio(Math.min(window.devicePixelRatio||1,l.pr)),c.np=l.np;let _=document.getElementById("grain");_&&(_.hidden=!l.grain),document.documentElement.style.setProperty("--bs",{s:.85,m:1,l:1.2}[An("hw_btn","m")]||1),document.body.classList.toggle("lefty",An("hw_lefty","off")==="on"),c.invert=An("hw_invert","off")==="on"}W();let Y=new go,ut=new ue("#EFEBDD");Y.background=ut;let mt=new vn(72,1,.08,200);mt.rotation.order="YXZ";let _t=G0(p),Pt=W0(p,_t),le=Z0(_t.canvas),Dt=new Worker("assets/hw-worker.js?v="+jc),ct=new Fc({scene:Y,mats:le,reg:p,worker:Dt,diffs:C,onDirty:l=>{c.dirty.add(l),(c.mapDirty||(c.mapDirty=new Set)).add(l)}}),Qt=Math.max(2,Math.min(6,parseInt(th.get("rd")||An("hw_rd",c.touch?"3":"4"),10)||4));ct.setRenderDistance(Qt),mt.far=Qt*16+40,mt.updateProjectionMatrix();let Nt=await new Promise(l=>{let _=S=>{S.data.type==="ready"&&(Dt.removeEventListener("message",_),l(S.data.spawn))};Dt.addEventListener("message",_),Dt.postMessage({type:"init",seed:F,dim:e,blocks:r,structures:h,diffs:Object.fromEntries([...C].map(([S,A])=>[S,Tf(A)]))})}),re=g.player&&g.player.dims&&g.player.dims[e];c.dimPos=g.player&&g.player.dims||{},g.player&&(e==="overworld"||re)?Object.assign(c,{p:re?{x:re.x,y:re.y,z:re.z}:{x:g.player.x,y:g.player.y,z:g.player.z},yaw:(re?re.yaw:g.player.yaw)||0,pitch:g.player.pitch||0,fly:!!g.player.fly&&!re,sel:g.player.sel|0}):(g.player&&(c.sel=g.player.sel|0),c.p={x:Nt.x,y:Nt.y,z:Nt.z},c.yaw=Math.atan2(-(Nt.stele.x+.5-Nt.x),-(Nt.stele.z+.5-Nt.z)),c.pitch=-.15);let ge=new Fs(new wo(new Je(1.004,1.004,1.004)),new Us({color:1382164,transparent:!0,opacity:.45}));ge.visible=!1,Y.add(ge);let _e=X0().map(l=>new Gn(l)),oe=new Ne(new Je(1.01,1.01,1.01),new Mn({map:_e[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));oe.visible=!1,Y.add(oe);let Oe=(l,_)=>{let S=document.createElement("canvas");S.width=S.height=64;let A=S.getContext("2d");A.fillStyle=l,A.beginPath(),A.arc(32,32,28,0,7),A.fill(),_&&(A.globalCompositeOperation="destination-out",A.beginPath(),A.arc(44,26,24,0,7),A.fill());let L=new Gn(S);return L.colorSpace=en,L},H=new ds(new qi({map:Oe("#F2C46B"),depthWrite:!1,fog:!1})),He=new ds(new qi({map:Oe("#EDE6D0",!0),depthWrite:!1,fog:!1}));Y.add(H,He);let Me=500,U=new Float32Array(Me*6),v=new Float32Array(Me*3),$=new Float32Array(Me*3);for(let l=0;l<Me;l++)$[l*3]=Math.random()*24-12,$[l*3+1]=Math.random()*16,$[l*3+2]=Math.random()*24-12;let ot=new cn;ot.setAttribute("position",new je(U,3));let ht=new Fs(ot,new Us({color:9414574,transparent:!0,opacity:.55,depthWrite:!1}));ht.frustumCulled=!1,ht.visible=!1,Y.add(ht);let At=new cn;At.setAttribute("position",new je(v,3));let Lt=new Mo(At,new Sr({color:16052712,size:.13,transparent:!0,opacity:.9,depthWrite:!1}));Lt.frustumCulled=!1,Lt.visible=!1,Y.add(Lt),c.weather=id();let ft=0;function pt(l,_,S){if(ht.visible=S==="rain",Lt.visible=S==="snow",!!S){ft+=l;for(let A=0;A<c.np;A++){let L=$[A*3],z=$[A*3+2],K=S==="rain"?16:1.6,at=_.y+10-($[A*3+1]+ft*K)%16;if(S==="rain"){let st=A*6;U[st]=U[st+3]=_.x+L,U[st+2]=U[st+5]=_.z+z,U[st+1]=at,U[st+4]=at-.45}else{let st=A*3,bt=Math.sin(ft*.8+A)*.4;v[st]=_.x+L+bt,v[st+1]=at,v[st+2]=_.z+z+bt*.6}}ot.setDrawRange(0,c.np*2),At.setDrawRange(0,c.np),(S==="rain"?ot:At).attributes.position.needsUpdate=!0}}let It=new gn,Yt=(l,_,S,A,L,z,K)=>{let at=new Ne(new Je(l,_,S),new Mn({color:A}));return at.position.set(L,z,K),at.userData.base=new ue(A),It.add(at),at},Ot=Yt(.24,.75,.26,"#26302A",-.14,.375,0),Ut=Yt(.24,.75,.26,"#26302A",.14,.375,0);Yt(.56,.7,.3,"#2F5A34",0,1.1,0);let te=Yt(.18,.66,.2,"#E7CDA6",-.38,1.12,0),se=Yt(.18,.66,.2,"#E7CDA6",.38,1.12,0);Yt(.46,.42,.42,"#E7CDA6",0,1.66,0),Yt(.5,.14,.46,"#151714",0,1.9,.02),Yt(.12,.12,.05,"#E0352B",.16,1.92,-.24),[Ot,Ut,te,se].forEach(l=>{l.geometry.translate(0,-l.geometry.parameters.height/2+.05,0),l.position.y+=l.geometry.parameters.height/2-.05}),It.visible=!1,Y.add(It);let fe={},G=l=>fe[l]||(fe[l]=(()=>{let _=new Image;_.src=Pt[l];let S=new xn(_);return S.colorSpace=en,_.onload=()=>{S.needsUpdate=!0},new qi({map:S,depthWrite:!0,alphaTest:.3})})());function wt(l,_,S,A){let L=new ds(G(l));L.scale.set(.42,.42,1),Y.add(L),c.drops.push({id:l,s:L,p:{x:_,y:S,z:A},v:{x:(Math.random()-.5)*2,y:3,z:(Math.random()-.5)*2},age:0})}let dt=(l,_,S)=>{let A=ct.get(l,_,S);return p.flat.solid[A]===1&&(p.flat.boxes[A]||!0)},Et=Object.fromEntries((a.mobs||[]).map(l=>[l.id,l])),Rt=Mg(),xt=new Map,ee=0;function $t(l,_){for(let S=61;S>0;S--){let A=ct.get(l,S,_);if(p.flat.solid[A])return ct.get(l,S+1,_)||ct.get(l,S+2,_)?null:{y:S+1,n:A};if(p.flat.liquid[A])return null}return null}function ze(l,_,S,A=7){for(let L=-A;L<=A;L++)for(let z=-A;z<=A;z++)for(let K=-A;K<=A;K++)if(p.flat.lightEmit[ct.get(l+K,_+L,S+z)])return!0;return!1}function Se(l,_,S,A,L){let z=bg(Rt,l,{x:_+.5,y:S,z:A+.5}),K=Hg(l,L);return xt.set(z.id,K),Y.add(K),z}let En=new Set;function On(){for(let l of E.villages.around(c.p.x-64,c.p.z-64,c.p.x+64,c.p.z+64))if(!(En.has(l.id)||!ct.ready(l.x,l.z))){En.add(l.id);for(let _=0;_<l.villagers;_++){let S=ag(l.id,_,m),A=l.x+(_%2?2:-2),L=l.z+(_-1),z=$t(A,L),K=Se(Et.villager,A,z?z.y:l.y+1,L,S.prof.color);Object.assign(K,{home:{x:l.x,z:l.z},village:l.id,role:S})}}}function eh(l){if(Et.villager&&On(),e==="overworld"&&c.horse&&!c.horseMob&&Et.horse&&ct.ready(c.horse.x,c.horse.z)){let K=Se(Et.horse,Math.floor(c.horse.x),c.horse.y,Math.floor(c.horse.z));K.tame=!0,c.horse.saddled&&Wd(K),c.horseMob=K}if(e==="overworld")for(let K=c.petsPending.length-1;K>=0;K--){let at=c.petsPending[K];if(!Et[at.type]||!ct.ready(at.x,at.z))continue;c.petsPending.splice(K,1);let st=Se(Et[at.type],Math.floor(at.x),at.y,Math.floor(at.z));Object.assign(st,{tame:!0,sit:!!at.sit,name:at.name||""}),Xd(st),Yd(st)}let _=Math.random()*Math.PI*2,S=14+Math.random()*14,A=Math.floor(c.p.x+Math.cos(_)*S),L=Math.floor(c.p.z+Math.sin(_)*S);if(!ct.ready(A,L))return;let z=$t(A,L);if(z)if(sa(Rt,"animal")<Xc.animal&&z.n===p.num("grass")&&l>.3){let K=E.biomeOf(A,L),at=Object.values(Et).filter(Jt=>Jt.kind==="animal"&&(!Jt.biome||Jt.biome===K)),st=Math.random()*at.reduce((Jt,ie)=>Jt+(ie.w??1),0),bt=at[0];for(let Jt of at)if(st-=Jt.w??1,st<=0){bt=Jt;break}let Vt=1+Math.floor(Math.random()*3);for(let Jt=0;Jt<Vt&&sa(Rt,"animal")<Xc.animal;Jt++){let ie=A+Jt%2,we=L+(Jt>>1),Te=$t(ie,we);Te&&Se(bt,ie,Te.y,we)}}else t.quizMobs&&sa(Rt,"quiz")<Xc.quiz&&Sg(l,ze(A,z.y,L))&&Et.quizling&&Se(e==="shadow"&&Et.shadowling?Et.shadowling:Et.quizling,A,z.y,L)}function nh(l,_,S){ee+=l,ee>2.5&&c.started&&(ee=0,eh(e==="shadow"?0:_));for(let A=Rt.list.length-1;A>=0;A--){let L=Rt.list[A],z=xt.get(L.id),K=Math.hypot(L.p.x-c.p.x,L.p.z-c.p.z);if(L.riding){L.p.x=c.p.x,L.p.y=c.p.y,L.p.z=c.p.z,L.yaw=c.yaw,L.v.x=c.v.x,L.v.z=c.v.z,Kc(z,L,S/1e3);continue}if(L.gone){L.goneT=(L.goneT||0)+l,Kc(z,L,S/1e3),L.goneT>.35&&(Y.remove(z),xt.delete(L.id),Rt.list.splice(A,1));continue}if(wg(L,_,K)){L.gone=!0,L.goneT=0,L.village&&En.delete(L.village);continue}let at=L.tame&&qs(L);if(at&&!L.sit&&K>Ad&&!c.ride&&l&&(L.p={x:c.p.x,y:c.p.y+.2,z:c.p.z},L.v={x:0,y:0,z:0}),!ct.ready(L.p.x,L.p.z))continue;if(at){let bt=L.def.guard&&!L.sit?Cd(L,Rt.list):null;bt&&Math.hypot(bt.p.x-L.p.x,bt.p.z-L.p.z)<1.8&&(bt.held=.3,bt.guarded||(bt.guarded=!0,vt(`${L.def.name_zh}\u64CB\u4F4F\u932F\u984C\u602A\u4E86\uFF01\u5FEB\u53BB\u7B54\u984C\u6253\u6557\u5B83`))),Td(L,c.p,l,bt?bt.p:null)}else Ag(L,c.p,l,Math.random);L.v.y-=20*l,L.v.y<-20&&(L.v.y=-20);let st=Ac(L.p,L.v,l,dt,{w:Math.min(.9,L.def.size[0]),h:L.def.size[1],canStep:!0,grounded:L.onGround});L.onGround=st.onGround,p.flat.liquid[ct.get(L.p.x,L.p.y+.3,L.p.z)]&&(L.v.y=2),Kc(z,L,S/1e3),L.sit&&(z.position.y-=.12)}Gg(.35+.65*_)}function Qi(l,_,S){let A,L;l==="screen"?(bi.set(_/innerWidth*2-1,-(S/innerHeight)*2+1,.5).unproject(mt).sub(mt.position).normalize(),A={x:mt.position.x,y:mt.position.y,z:mt.position.z},L={x:bi.x,y:bi.y,z:bi.z}):(A=Xr(),L=fa());let z=l==="screen"?Bn("screen",_,S):Bn("center"),K=null,at=c.view==="tp"&&l==="screen"?8:4.5;z&&(at=Math.min(at,z.dist+.5));for(let st of Rt.list){if(st.gone||st.riding)continue;let bt=Vr(A,L,st.p,st.def.size[0],st.def.size[1]);bt!=null&&bt<at&&(at=bt,K=st)}for(let st of c.vehicles){if(c.ride&&c.ride.veh===st)continue;let bt=Vr(A,L,st.p,1.3,.9);bt!=null&&bt<at&&(at=bt,K=st.m)}if(c.boss){let st=Vr(A,L,c.boss.p,3.6,3.6);st!=null&&st<at+1&&(at=st,K=c.boss.m)}return K}function Ts(){try{return Cg(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{return[]}}function Ys(l,_=0){if(l.kind==="vehicle"){ch(l.veh);return}if(l.kind==="boss"){yx();return}if(l.type==="horse"){sx(l);return}if(l.kind==="villager"){if(!t.trading){vt("\u5275\u9020\u6A21\u5F0F\u88E1\u6751\u6C11\u4E0D\u505A\u751F\u610F\uFF0C\u6771\u897F\u90FD\u5728\u80CC\u5305\u76EE\u9304\u88E1");return}$g(l);return}if(qs(l)){qd(l);return}if(l.kind==="animal"&&w.slots[c.sel]&&w.slots[c.sel].id===(l.def.food||"wheat")){t.consume&&Un(w,c.sel,1),X();let A=Date.now();l.love=A,vt(`${l.def.name_zh}\u5403\u4E86${p.name(l.def.food||"wheat")}\uFF0C\u597D\u958B\u5FC3`);let L=Zf(Rt.list,l,A);if(L&&sa(Rt,"animal")<$f){let z=Se(l.def,Math.floor((l.p.x+L.p.x)/2),Math.floor(l.p.y),Math.floor((l.p.z+L.p.z)/2));xt.get(z.id).scale.setScalar(.65),l.love=0,L.love=0,vt(`\u751F\u4E86\u4E00\u96BB\u5C0F${l.def.name_zh}\uFF01`),c.stats.bred=(c.stats.bred||0)+1,xe("bred")}else L&&vt("\u52D5\u7269\u592A\u591A\u4E86\uFF0C\u5148\u4E0D\u751F");return}if(l.kind==="animal"&&l.def.noHit){vt(`${l.def.name_zh}\u5728\u6162\u6162\u5403${p.name(l.def.food||"wheat")}\uFF0C\u4E0D\u8981\u5435\u7260\u3002\u62FF${p.name(l.def.food||"wheat")}\u9935\u7260\u770B\u770B`);return}if(l.kind==="animal"){let A=w.slots[c.sel],L=!_&&!!(A&&p.toolOf(A.id)&&p.toolOf(A.id).type==="sword"),z=Eg(l,L||_>=2,Math.random);if(l.v.y=4,l.v.x+=(l.p.x-c.p.x)*1.5,l.v.z+=(l.p.z-c.p.z)*1.5,L){let K=kr(w,c.sel,p);K.broke&&vt(`\u4F60\u7684${p.name(K.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),X()}if(z&&z.drops)for(let K=0;K<z.drops.n;K++)wt(z.drops.id,l.p.x,l.p.y+.6,l.p.z);z&&z.meat&&wt(z.meat.id,l.p.x,l.p.y+.6,l.p.z);return}if(l.busy)return;l.busy=!0,kn(),document.pointerLockElement&&document.exitPointerLock(),c.overlay="ask";let S=Ts().slice(0,30).sort(()=>Math.random()-.5);ta(gt.ov,{ids:S,onDone:(A,L)=>{if(c.overlay=null,l.busy=!1,A&&l.def.tough&&!l.hurt){l.hurt=!0,vt("\u6697\u5F71\u932F\u984C\u602A\u6643\u4E86\u4E00\u4E0B\uFF0C\u518D\u7B54\u5C0D\u4E00\u984C\u5C31\u80FD\u6253\u6557\u5B83\uFF01");return}if(A){let z=Tg(!0,L)+(l.def.tough?2:0);Fn(D,z),Ln(),l.gone=!0,l.goneT=0,vt(`\u6253\u6557\u932F\u984C\u602A\uFF01 +${z} \u91D1\u5E63`),c.dirtyMeta=!0,ln(),c.stats.quizWins=(c.stats.quizWins||0)+1,xe("quiz_wins")}else if(A===!1){let z=c.p.x-l.p.x,K=c.p.z-l.p.z,at=Math.hypot(z,K)||1;c.v.x=z/at*7,c.v.z=K/at*7,c.v.y=4.5,l.p.x-=z/at*1.5,l.p.z-=K/at*1.5,vt("\u88AB\u932F\u984C\u602A\u63A8\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01")}}})}let ii=(l,_,S)=>ct.get(l,_,S),ts=(l,_,S)=>{let A=p.get(ct.get(l,_,S));return A&&A.rail?{shape:A.rail,powered:!!A.powered}:null},gt=s1();function vt(l){for(;gt.toasts.children.length>3;)gt.toasts.firstChild.remove();let _=I("div",{class:"toast"},l);gt.toasts.append(_),setTimeout(()=>_.remove(),2200)}function la(l){let _=I("div",{class:"toast ach"},I("i",{class:"badge"}),I("span",{},"\u6210\u5C31\u9054\u6210\uFF1A",I("b",{},l.name_zh),l.coins&&t.coins?`\u3000+${l.coins} \u91D1\u5E63`:""));gt.toasts.append(_),setTimeout(()=>_.remove(),3500)}function xe(l,_=1){x0(b,l,_),c.dirtyMeta=!0;for(let S of y0(b,R))la(S),S.coins&&t.coins&&(Fn(D,S.coins),Ln())}let si=()=>Math.max(5,Math.min(100,parseInt(An("hw_daily_goal","20"),10)||20)),zi=0;function Cs(){let l=si();gt.learnCnt.textContent=zi+"/"+l,gt.learnBar.style.width=Math.min(100,zi/l*100)+"%",gt.learnPill.classList.toggle("done",zi>=l)}function $s(){try{zi=sg()}catch{}Cs()}ig(l=>{let _=zi;$s(),xe("answers"),l&&xe("answers_ok"),_<si()&&zi>=si()&&vt("\u4ECA\u5929\u7684\u5B78\u7FD2\u76EE\u6A19\u9054\u6210\u4E86\uFF01\u597D\u68D2\uFF01")});function ca(){let l=document.getElementById("pinbox"),_=window.KSParentPin;if(l.innerHTML="",!_||!_.isSet()){l.append(I("div",{class:"pin-ask"},I("p",{},"\u6539\u6BCF\u65E5\u76EE\u6A19\u8981\u5BB6\u9577\u5BC6\u78BC\u3002\u8ACB\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),I("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let S=I("input",{class:"typein",type:"password",inputmode:"numeric",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),A=I("input",{class:"typein",type:"number",min:"5",max:"100",value:String(si()),"aria-label":"\u6BCF\u65E5\u984C\u6578"}),L=()=>{if(!_.verify(S.value.trim())){vt("\u5BC6\u78BC\u4E0D\u5C0D"),S.value="";return}ni("hw_daily_goal",String(Math.max(5,Math.min(100,+A.value||20)))),Cs(),vt("\u6BCF\u65E5\u76EE\u6A19\u6539\u6210 "+si()+" \u984C"),Nd()};[S,A].forEach(z=>z.addEventListener("keydown",K=>{K.stopPropagation(),K.key==="Enter"&&L()})),l.append(I("div",{class:"pin-ask"},I("p",{},"\u5BB6\u9577\uFF1A\u6BCF\u5929\u8981\u7B54\u5E7E\u984C\uFF085\u2013100\uFF09"),I("div",{class:"typerow"},S,A,I("button",{class:"btn",onclick:L},"\u78BA\u5B9A")))),setTimeout(()=>S.focus(),50)}function ha(l,_,S,A){xe("placed"),(A==="torch"||A==="scaffold")&&xe("place:"+A);let L=c.recentPlaced||(c.recentPlaced=[]);L.push([l,_,S]),L.length>80&&L.shift(),!b.done.house&&v0(L,l,_,S)>=30&&xe("house")}function ih(){let l=!1;for(let _ of Jn())b.stats["boss:"+_]||(b.stats["boss:"+_]=1,l=!0);l&&xe("boss",0)}let ua=D.coins;function Ln(){D.coins>ua&&Ke("coin"),ua=D.coins,gt.coins.textContent=D.coins}let Wr="";function T(){let l=yd(et.hp),_=l.join();_!==Wr&&(Wr=_,gt.hearts.innerHTML="",l.forEach(S=>gt.hearts.append(I("i",{class:"ht "+S}))))}function V(l){if(c.dead||l<=0||!t.damage)return;let _=l,S=ea(c.armor,p);if(l=qf(l,S),S&&(Xf(c.armor,c.armorDur,p,_).forEach(z=>vt(`\u4F60\u7684${p.name(z)}\u7A7F\u820A\u4E86\uFF0C\u8F15\u8F15\u88C2\u958B\u56C9\u3002\u518D\u505A\u4E00\u4EF6\u65B0\u7684\u5427\uFF01`)),nn(),c.dirtyMeta=!0),l<=0)return;let A=md(et,l);T(),c.dirtyMeta=!0,Ke("hurt"),gt.flash.classList.remove("on"),gt.flash.offsetWidth,gt.flash.classList.add("on"),A&&lt()}function lt(){$r(!0),c.dead=!0,kn(),document.pointerLockElement&&document.exitPointerLock(),c.overlay="dead";let l=gt.ov;l.innerHTML="",l.hidden=!1,l.append(I("div",{class:"panel start"},I("h2",{},"\u4F60\u6688\u5012\u4E86\uFF01"),I("p",{},"\u5225\u64D4\u5FC3\uFF0C\u80CC\u5305\u88E1\u7684\u6771\u897F\u90FD\u9084\u5728\u3002"),I("button",{class:"btn big",onclick:nt},c.bed&&e==="overworld"?"\u56DE\u5230\u5E8A\u908A":"\u56DE\u5230\u51FA\u751F\u9EDE")))}function nt(){let l=xd(c.bed,Nt,!!c.bed&&e==="overworld");c.p={x:l.x,y:l.y,z:l.z},c.v={x:0,y:0,z:0},c.fallTop=l.y,et.hp=20,c.dead=!1,T(),Pe(),c.dirtyMeta=!0,vt(c.bed?"\u5728\u5E8A\u908A\u9192\u4F86\u4E86":"\u56DE\u5230\u51FA\u751F\u9EDE\u4E86")}function X(){gt.hotbar.innerHTML="";for(let _=0;_<9;_++){let S=w.slots[_];gt.hotbar.append(I("button",{class:"slot"+(_===c.sel?" on":""),"aria-label":S?p.name(S.id):"\u7A7A\u683C",onpointerdown:A=>{A.stopPropagation(),c.sel=_,X()}},S?I("img",{src:Pt[S.id],alt:""}):null,S&&S.count>1?I("span",{class:"cnt"},S.count):null,Bt(S),I("span",{class:"key"},_+1)))}let l=w.slots[c.sel];gt.selName.textContent=l?p.name(l.id):""}function Bt(l){let _=vg(l,p);return!_||_.left>=_.max?null:I("span",{class:"dur"+(_.frac<.25?" low":"")},I("i",{style:"width:"+Math.round(_.frac*100)+"%"}))}function Xt(l=4){let _=new Set,S=Math.floor(c.p.x),A=Math.floor(c.p.y),L=Math.floor(c.p.z);for(let z=-l;z<=l;z++)for(let K=-l;K<=l;K++)for(let at=-l;at<=l;at++){let st=ct.get(S+at,A+z,L+K);st&&_.add(p.get(st).id)}return _}let zt=()=>({near:Xt(),owned:new Set(D.owned)}),Kt=-1,Wt=null,de=null,ye=l=>l==="inv"?w:l==="chest"?it[de]:null,Zt=(l,_)=>l==="armor"?c.armor[_]?{id:c.armor[_],count:1,dur:c.armorDur[_]}:null:ye(l).slots[_];function Ie(l,_,S){if(!Wt){Zt(l,_)&&(Wt={c:l,i:_}),S();return}let A=Wt;if(Wt=null,A.c===l&&A.i===_){S();return}if(l==="armor"||A.c==="armor"){let[L,z,K,at]=l==="armor"?[A.c,A.i,l,_]:[l,_,A.c,A.i];if(L==="armor"){S();return}let st=ye(L),bt=st.slots[z],Vt=bt&&p.get(bt.id),Jt=c.armor[at];if(bt&&!(Vt.armor&&Vt.armor.slot===at)){vt("\u9019\u500B\u4E0D\u80FD\u7A7F\u5728\u9019\u88E1"),S();return}let ie=c.armorDur[at],we=Jt?Number.isFinite(ie)?{id:Jt,count:1,dur:ie}:{id:Jt,count:1}:null;bt?(c.armor[at]=bt.id,c.armorDur[at]=Number.isFinite(bt.dur)?bt.dur:null,bt.count>1?(bt.count--,we&&wn(st,Jt,1,y)):st.slots[z]=we):Jt&&(c.armor[at]=null,c.armorDur[at]=null,st.slots[z]=we),nn(),c.dirtyMeta=!0,X(),S();return}A.c===l?gf(ye(l),A.i,_,y):yf(ye(A.c),A.i,ye(l),_,y),c.dirtyMeta=!0,X(),S()}let Ge=(l,_,S,A="")=>{let L=Zt(l,_),z=Wt&&Wt.c===l&&Wt.i===_;return I("button",{class:"slot"+(z?" pick":"")+A,title:L?p.name(L.id):"",onclick:()=>Ie(l,_,S)},L?I("img",{src:Pt[L.id],alt:""}):null,L&&L.count>1?I("span",{class:"cnt"},L.count):null,Bt(L))},Ve=["\u982D","\u8EAB","\u817F","\u8173"];function Fe(l){let _=ea(c.armor,p);return I("div",{class:"armor-row"},Ve.map((S,A)=>I("div",{class:"armor-slot"},Ge("armor",A,l),I("small",{},S))),I("small",{class:"muted"},`\u8B77\u7532 ${_} \u9EDE\uFF08\u53D7\u50B7\u5C11 ${Math.min(80,_*4)}%\uFF09`))}function nn(){if(gt.armor){let l=ea(c.armor,p);gt.armor.textContent=l?`\u8B77\u7532 ${l}`:""}}function Ht(){let l=gt.ov;l.innerHTML="",l.hidden=!1;let _=it[de]||(it[de]=$o(27)),S=I("div",{class:"inv-grid"});for(let z=0;z<27;z++)S.append(Ge("chest",z,Ht));let A=I("div",{class:"inv-grid"});for(let z=9;z<36;z++)A.append(Ge("inv",z,Ht));let L=I("div",{class:"inv-grid hbrow"});for(let z=0;z<9;z++)L.append(Ge("inv",z,Ht," hb"));return l.append(I("div",{class:"panel inv"},I("div",{class:"p-head"},I("h2",{},"\u7BB1\u5B50"),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Pe},"\xD7")),I("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u642C\u904E\u53BB\uFF08\u7BB1\u5B50 \u2194 \u80CC\u5305\uFF09\u3002"),S,I("h3",{},"\u80CC\u5305"),A,L)),_}function tn(){let l=gt.ov;l.innerHTML="",l.hidden=!1;let _=I("div",{class:"inv-grid"}),S=at=>Ge("inv",at,tn,at<9?" hb":"");for(let at=9;at<36;at++)_.append(S(at));let A=I("div",{class:"inv-grid hbrow"});for(let at=0;at<9;at++)A.append(S(at));let L=I("div",{class:"craft"},I("h3",{},"\u5408\u6210"));if(t.creative){let at=I("div",{class:"craft"},I("h3",{},"\u65B9\u584A\u76EE\u9304\uFF08\u7121\u9650\uFF09"),I("p",{class:"muted"},"\u9EDE\u4E00\u4E0B\u5C31\u653E\u9032\u5FEB\u6377\u5217\u76EE\u524D\u9078\u7684\u90A3\u683C\u3002")),st=I("div",{class:"cat-grid"});dg(p).forEach(bt=>st.append(I("button",{class:"slot",title:p.name(bt),onclick:()=>{w.slots[c.sel]={id:bt,count:64},c.dirtyMeta=!0,X(),tn(),vt(`${p.name(bt)} \u653E\u9032\u7B2C ${c.sel+1} \u683C`)}},I("img",{src:Pt[bt],alt:""})))),at.append(st),l.append(I("div",{class:"panel inv"},I("div",{class:"p-head"},I("h2",{},"\u80CC\u5305\uFF08\u5275\u9020\u6A21\u5F0F\uFF09"),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Pe},"\xD7")),I("div",{class:"inv-wrap"},I("div",{},I("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002"),_,A),at)));return}let z=zt(),K={needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"};M.forEach(at=>{let st=Lc(w,at,z),bt=st.ok;at.blueprint&&st.reason==="blueprint"&&!Object.keys(at.in).some(Vt=>Vt!=="stick"&&Yn(w,Vt)>0)||L.append(I("div",{class:"rcp"+(bt?"":" no")},I("img",{src:Pt[at.out.id],alt:""}),I("div",{class:"rcp-t"},I("b",{},`${at.name_zh} \xD7${at.out.count}`),I("small",{},Object.keys(at.in).map(Vt=>`${p.name(Vt)} ${Yn(w,Vt)}/${at.in[Vt]}`).join("\u3001")+(K[st.reason]?"\u3000\xB7 "+K[st.reason]:""))),I("button",{class:"btn small",onclick:()=>{let Vt=xf(w,at,y,zt());Vt.ok?(vt(`\u505A\u597D\u4E86\uFF1A${at.name_zh} \xD7${at.out.count}`),c.dirtyMeta=!0,xe("craft:"+at.out.id)):vt({full:"\u80CC\u5305\u6EFF\u4E86",needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"}[Vt.reason]||"\u6750\u6599\u4E0D\u5920"),tn(),X()}},"\u88FD\u4F5C")))}),l.append(I("div",{class:"panel inv"},I("div",{class:"p-head"},I("h2",{},"\u80CC\u5305"),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Pe},"\xD7")),I("div",{class:"inv-wrap"},I("div",{},I("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002\u4E0A\u9762\u662F\u76D4\u7532\uFF1A\u628A\u76D4\u7532\u9EDE\u5230\u5C0D\u7684\u683C\u5B50\u5C31\u7A7F\u4E0A\u3002"),Fe(tn),_,A),L)))}let Ee=A0(p);function Tn(){let l=gt.ov;l.innerHTML="",l.hidden=!1;let _=I("div",{class:"shop"}),S=Dg(B,Jn());Ee.filter(A=>!A.id.startsWith("portal_")||S&&A.id===S.block).forEach(A=>_.append(I("div",{class:"offer"+(A.locked?" locked":"")},I("img",{src:Pt[A.id],alt:""}),I("div",{class:"of-t"},I("b",{},`${A.name_zh}${A.qty>1?" \xD7"+A.qty:""}`),I("small",{},A.locked?`\uFF08${A.locked}\uFF09`:`${A.price} \u91D1\u5E63${A.desc?"\u3000"+A.desc:""}`)),Or(D,A.id)?I("span",{class:"owned"},"\u5DF2\u64C1\u6709"):I("button",{class:"btn small",disabled:A.locked?!0:null,onclick:()=>Zn(A)},A.locked?"\u672A\u958B\u653E":"\u8CFC\u8CB7")))),l.append(I("div",{class:"panel"},I("div",{class:"p-head"},I("h2",{},"\u5546\u5E97\u3000",I("span",{class:"coin"}),` ${D.coins}`),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Pe},"\xD7")),I("p",{class:"muted"},"\u91D1\u5E63\u600E\u9EBC\u4F86\uFF1F\u53BB\u300C\u7DF4\u7FD2\u77F3\u7891\u300D\u7B54\u82F1\u6587\u984C\uFF1A\u7B54\u5C0D 1 \u679A\u3001\u6253\u5B57\u984C 2 \u679A\u3002"),_))}function Zn(l){let _=E0(D,w,l,y);_.ok?(xe("bought"),xe("buy:"+l.id),vt(l.blueprint?`\u62FF\u5230 ${l.name_zh}\uFF01\u53BB\u5DE5\u4F5C\u53F0\u505A\u505A\u770B`:`\u8CB7\u5230 ${l.name_zh} \xD7${l.qty}`),c.dirtyMeta=!0,Ln(),X(),ln()):vt({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",locked:"\u9084\u6C92\u958B\u653E",owned:"\u5DF2\u7D93\u6709\u4E86"}[_.reason]||"\u8CB7\u4E0D\u4E86"),Tn()}let zn=null;function ri(){let l=gt.ov,_=tt[zn]||(tt[zn]=ad());l.innerHTML="",l.hidden=!1;let S=_.jobs[0],A=I("div",{class:"shop"});St.forEach(z=>{let K=Yn(w,z.in);A.append(I("div",{class:"offer"+(K?"":" locked")},I("img",{src:Pt[z.in],alt:""}),I("div",{class:"of-t"},I("b",{},`${p.name(z.in)} \u2192 ${p.name(z.out)}`),I("small",{},`\u6709 ${K} \u500B \xB7 \u6BCF\u500B ${z.time} \u79D2`)),I("button",{class:"btn small",onclick:()=>{let at=ld(_,w,z,Ct);at.ok||vt(at.reason==="fuel"?"\u8981\u653E\u7164\u70AD\u7576\u71C3\u6599":"\u6C92\u6709\u6750\u6599"),c.dirtyMeta=!0,X(),ri()}},"\u653E\u9032\u53BB")))});let L=Object.values(_.done).reduce((z,K)=>z+K,0);l.append(I("div",{class:"panel"},I("div",{class:"p-head"},I("h2",{},"\u7194\u7210"),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Pe},"\xD7")),I("p",{class:"muted"},`\u71C3\u6599\u9084\u80FD\u71D2 ${Math.max(0,_.fuel-_.jobs.length)} \u500B\uFF08\u80CC\u5305\u7164\u70AD ${Yn(w,"coal")}\uFF1B1 \u500B\u7164\u70AD\u71D2 ${Ct} \u500B\uFF09`),I("div",{class:"furnace-st"},S?`\u6B63\u5728\u71D2\uFF1A${p.name(S.in)}\uFF08\u9084\u8981 ${Math.ceil(S.left)} \u79D2\uFF0C\u6392\u968A ${_.jobs.length} \u500B\uFF09`:"\u7210\u5B50\u7A7A\u8457"),I("div",{class:"row"},I("button",{class:"btn",disabled:L?null:!0,onclick:()=>{let z=hd(_,w,y);z&&(vt(`\u62FF\u51FA ${z} \u500B`),xe("smelted",z)),c.dirtyMeta=!0,X(),ri()}},`\u62FF\u51FA\u4F86\uFF08${L}\uFF09`)),A))}let De=null,Ye=(l,_)=>{try{return JSON.parse(localStorage.getItem(l)||"null")||_}catch{return _}},Jn=()=>Lg(Ye("hw_portal_rewards",[]),Ye("hi_save",null),B),Be='<svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true"><path d="M20 30v-8a12 12 0 0 1 24 0v8h-6v-8a6 6 0 0 0-12 0v8z" fill="#26302A"/><polygon points="12,30 52,28 54,58 10,60" fill="#E0352B"/><polygon points="12,30 52,28 50,34 14,35" fill="rgba(0,0,0,.15)"/><circle cx="32" cy="44" r="4" fill="#EFEBDD"/><rect x="30" y="44" width="4" height="9" fill="#EFEBDD"/></svg>';function vi(){let l=B.find(L=>L.map===De),_=gt.ov;if(_.innerHTML="",_.hidden=!1,!l){Pe();return}let S=Object.keys(l.reward.items).map(L=>`${p.name(L)} \xD7${l.reward.items[L]}`).join("\u3001"),A=vd(l.map,B,Jn());if(!A.ok){_.append(I("div",{class:"panel start"},I("div",{class:"p-head"},I("h2",{},"\u50B3\u9001\u9580\u30FB"+l.name_zh),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Pe},"\xD7")),I("div",{class:"padlock",html:Be}),I("p",{class:"big"},`\u5148\u6253\u5012 ${A.need.boss_zh} \u624D\u80FD\u9032\u5165`),I("p",{class:"muted"},`\u5F9E\u300C${A.need.name_zh}\u300D\u50B3\u9001\u9580\u9032\u53BB\uFF0C\u6253\u5012 ${A.need.boss_zh}\uFF0C\u9019\u500B\u50B3\u9001\u9580\u5C31\u6703\u6253\u958B\u3002`),I("div",{class:"row"},I("button",{class:"btn ghost",onclick:Pe},"\u77E5\u9053\u4E86"))));return}_.append(I("div",{class:"panel start"},I("div",{class:"p-head"},I("h2",{},"\u50B3\u9001\u9580\u30FB"+l.name_zh),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Pe},"\xD7")),I("p",{},`\u7A7F\u904E\u50B3\u9001\u9580\u5230\u52C7\u8005\u5CF6\u7684\u300C${l.name_zh}\u300D\u5192\u96AA\u3002\u6253\u5012\u90A3\u88E1\u7684 Boss\uFF0C\u56DE\u4F86\u53EF\u4EE5\u9818\uFF1A${l.reward.coins} \u91D1\u5E63\u3001${S}\u3002`),I("p",{class:"muted"},"\u4F60\u5728\u65B9\u584A\u4E16\u754C\u7684\u6771\u897F\u90FD\u6703\u81EA\u52D5\u5B58\u597D\u3002"),I("div",{class:"row"},I("button",{class:"btn big",onclick:async()=>{await ln(),c.leaving=Rg(l.map),location.href=c.leaving}},"\u9032\u5165"),I("button",{class:"btn ghost",onclick:Pe},"\u5148\u4E0D\u8981"))))}function Mi(){if(!t.portals)return 0;let l;try{l=JSON.parse(localStorage.getItem("hw_portal_rewards")||"[]")}catch{l=[]}let _=Ig(l,q);for(let S of _){let A=Pg(S,B,w,D,y);if(q.push(S.id),!!A.ok){for(let L in A.leftovers)for(let z=0;z<A.leftovers[L];z++)wt(L,c.p.x,c.p.y+1,c.p.z);vt(`\u5F9E${A.name_zh}\u5E36\u56DE\u4F86\uFF1A${A.coins} \u91D1\u5E63\u3001${Object.keys(A.items).map(L=>p.name(L)+" \xD7"+A.items[L]).join("\u3001")}`)}}return _.length&&(Ln(),X(),c.dirtyMeta=!0,ln()),ih(),_.length}let es=null;function $g(l){es=l,l.busy=!0,sn("trade")}function sh(){let l=es,_=gt.ov;if(!l)return Pe();_.innerHTML="",_.hidden=!1;let S=l.role,A=Gs(),L=I("div",{class:"shop"});S.prof.offers.forEach(K=>{let at=K.blueprint||K.give,st=!!K.blueprint,bt=st&&p.blueprints.find(Jt=>Jt.id===K.blueprint),Vt=st&&Or(D,K.blueprint);L.append(I("div",{class:"offer"},I("img",{src:Pt[at],alt:""}),I("div",{class:"of-t"},I("b",{},st?bt.name_zh:`${p.name(at)}${K.count>1?" \xD7"+K.count:""}`),I("small",{},`${K.price} \u91D1\u5E63${st?"\u3000"+(bt.desc||""):""}`)),Vt?I("span",{class:"owned"},"\u5DF2\u64C1\u6709"):I("button",{class:"btn small",onclick:()=>{let Jt=lg(D,w,K,y);Jt.ok?(Ke("trade"),xe("traded"),xe("bought"),vt(st?`\u62FF\u5230 ${bt.name_zh}\uFF01`:`\u8CB7\u5230 ${p.name(at)} \xD7${K.count}`),c.dirtyMeta=!0,Ln(),X(),ln()):vt({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u6216\u63A5\u82F1\u6587\u59D4\u8A17\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",owned:"\u5DF2\u7D93\u6709\u4E86"}[Jt.reason]||"\u8CB7\u4E0D\u4E86"),sh()}},"\u8CFC\u8CB7")))});let z=I("div",{class:"quests"});S.quests.forEach(K=>{let at=Bf(Z,K,A),st=Object.keys(K.reward.items||{}).map(bt=>`${p.name(bt)} \xD7${K.reward.items[bt]}`).join("\u3001");z.append(I("div",{class:"offer quest"+(at?" locked":"")},I("div",{class:"of-t"},I("b",{},"\u82F1\u6587\u59D4\u8A17\uFF1A"+K.title_zh),I("small",{},`${K.desc}\uFF0C\u7B54\u5C0D ${K.need} \u984C \u2192 ${K.reward.coins} \u91D1\u5E63\u3001${st}`)),at?I("span",{class:"owned"},"\u4ECA\u5929\u5B8C\u6210\u4E86"):I("button",{class:"btn small",onclick:()=>{c.overlay="quest",og(gt.ov,{quest:K,onDone:bt=>{if(c.overlay="trade",bt>=0){let Vt=cg(Z,K,bt,A,D,w,y);if(Vt.ok){for(let Jt in Vt.leftovers)for(let ie=0;ie<Vt.leftovers[Jt];ie++)wt(Jt,c.p.x,c.p.y+1,c.p.z);vt(`\u59D4\u8A17\u5B8C\u6210\uFF01 +${Vt.coins} \u91D1\u5E63\u3001${st}`),Ln(),X(),c.dirtyMeta=!0,ln(),c.stats.quests=(c.stats.quests||0)+1,xe("quests")}else vt(`\u7B54\u5C0D ${bt} \u984C\uFF0C\u8981 ${K.need} \u984C\u624D\u7B97\u5B8C\u6210\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01`)}sh()}})}},"\u63A5\u59D4\u8A17")))}),_.append(I("div",{class:"panel"},I("div",{class:"p-head"},I("h2",{},`\u6751\u6C11\u30FB${S.prof.name_zh}\u3000`,I("span",{class:"coin"}),` ${D.coins}`),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Pe},"\xD7")),I("h3",{},"\u4EA4\u6613"),L,I("h3",{},"\u82F1\u6587\u59D4\u8A17"),I("p",{class:"muted"},"\u6BCF\u500B\u59D4\u8A17\u6BCF\u5929\u53EF\u4EE5\u9818\u4E00\u6B21\u734E\u3002"),z))}function Nd(){let l=gt.ov;l.innerHTML="",l.hidden=!1;let _=I("b",{},ct.rd),S=I("input",{type:"range",min:2,max:6,step:1,value:ct.rd,oninput:A=>{_.textContent=A.target.value},onchange:A=>{let L=+A.target.value;ct.setRenderDistance(L),mt.far=L*16+40,mt.updateProjectionMatrix(),ni("hw_rd",L)}});l.append(I("div",{class:"panel"},I("div",{class:"p-head"},I("h2",{},"\u8A2D\u5B9A"),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Pe},"\xD7")),I("label",{class:"set"},"\u8996\u91CE\u8DDD\u96E2\uFF08\u5340\u584A\uFF09",_,S),I("label",{class:"set"},"\u756B\u8CEA",I("select",{onchange:A=>{ni("hw_gfx",A.target.value),W()}},[["low","\u7701\u96FB\uFF08iPad \u6BD4\u8F03\u9806\uFF09"],["med","\u4E00\u822C"],["high","\u6E05\u695A"]].map(([A,L])=>I("option",{value:A,selected:An("hw_gfx","high")===A?!0:null},L)))),I("label",{class:"set"},"\u6309\u9215\u5927\u5C0F",I("select",{onchange:A=>{ni("hw_btn",A.target.value),W()}},[["s","\u5C0F"],["m","\u4E2D"],["l","\u5927"]].map(([A,L])=>I("option",{value:A,selected:An("hw_btn","m")===A?!0:null},L)))),I("label",{class:"set"},"\u5DE6\u624B\u6A21\u5F0F\uFF08\u6416\u687F\u5728\u53F3\u908A\uFF09",I("input",{type:"checkbox",checked:An("hw_lefty","off")==="on"?!0:null,onchange:A=>{ni("hw_lefty",A.target.checked?"on":"off"),W()}})),I("label",{class:"set"},"\u4E0A\u4E0B\u8996\u89D2\u53CD\u8F49",I("input",{type:"checkbox",checked:An("hw_invert","off")==="on"?!0:null,onchange:A=>{ni("hw_invert",A.target.checked?"on":"off"),W()}})),I("label",{class:"set"},"\u97F3\u6A02",I("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().music:.35,oninput:A=>Gc({music:+A.target.value,muted:!1})})),I("label",{class:"set"},"\u97F3\u6548",I("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().sfx:.7,oninput:A=>{Gc({sfx:+A.target.value,muted:!1}),Ke("place","wood")}})),t.creative?I("label",{class:"set"},"\u5929\u6C23\uFF08\u4E0B\u96E8\u3001\u4E0B\u96EA\uFF09",I("input",{type:"checkbox",checked:An("hw_weather","on")!=="off"?!0:null,onchange:A=>ni("hw_weather",A.target.checked?"on":"off")})):null,I("p",{class:"muted"},"iPad \u5EFA\u8B70 3\uFF1B\u5361\u5361\u7684\u5C31\u8ABF\u5C0F\u3002"),I("div",{class:"row"},I("button",{class:"btn ghost",onclick:Jg},"\u532F\u51FA\u4E16\u754C\uFF08\u5099\u4EFD\u6A94\uFF09"),I("label",{class:"btn ghost"},"\u532F\u5165\u4E16\u754C",I("input",{type:"file",accept:".json,application/json",hidden:!0,onchange:A=>{A.target.files[0]&&Kg(A.target.files[0])}}))),I("div",{class:"row"},I("button",{class:"btn ghost",onclick:jg},"\u91CD\u7F6E\u4E16\u754C"),t.creative?I("button",{class:"btn",onclick:()=>rh("survival")},"\u56DE\u5230\u751F\u5B58\u6A21\u5F0F"):I("button",{class:"btn",onclick:Zg},"\u5275\u9020\u6A21\u5F0F\uFF08\u5BB6\u9577\u5BC6\u78BC\uFF09")),I("div",{class:"row"},I("button",{class:"btn ghost",onclick:ca},`\u6BCF\u65E5\u5B78\u7FD2\u76EE\u6A19\uFF1A${si()} \u984C\uFF08\u5BB6\u9577\uFF09`)),I("div",{id:"pinbox"}),I("div",{class:"row"},I("button",{class:"btn ghost",onclick:()=>{vf(N),c.dirtyMeta=!0,Pe(),yh(!0)}},"\u91CD\u65B0\u770B\u65B0\u624B\u6559\u5B78")),I("p",{class:"muted"},"\u91CD\u7F6E\u4E16\u754C\u6703\u6E05\u6389\u84CB\u597D\u7684\u65B9\u584A\u3001\u80CC\u5305\u548C\u4F4D\u7F6E\uFF1B\u91D1\u5E63\uFF08\u7B54\u984C\u8CFA\u7684\uFF09\u6703\u4FDD\u7559\u3002"),I("p",{},I("a",{class:"home-link",href:"../../#s/game",onclick:()=>{ln()}},"\u2190 \u56DE\u5C0F\u670B\u53CB\u5B78\u7FD2\u7AD9")),I("p",{class:"muted small"},"\u91D1\u5E63\u4F86\u6E90\uFF1A"+(j.source==="member"?"\u5B78\u7FD2\u7AD9\u5B78\u7FD2\u5E63":"\u9019\u53F0\u88DD\u7F6E\u7684\u9322\u5305")+"\u3000\u7248\u672C "+jc)))}async function rh(l){await ln(),ni("hw_mode",l),c.resetting=!0,location.reload()}function Zg(){let l=document.getElementById("pinbox"),_=window.KSParentPin;if(l.innerHTML="",!_||!_.isSet()){l.append(I("div",{class:"pin-ask"},I("p",{},"\u5275\u9020\u6A21\u5F0F\u8981\u5BB6\u9577\u540C\u610F\u3002\u8ACB\u7238\u7238\u5ABD\u5ABD\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),I("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let S=I("input",{class:"typein",type:"password",inputmode:"numeric",pattern:"[0-9]*",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),A=()=>{let L=ug(_,S.value.trim());L.ok?rh("creative"):(vt(L.reason==="wrong"?"\u5BC6\u78BC\u4E0D\u5C0D":"\u9084\u6C92\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC"),S.value="")};S.addEventListener("keydown",L=>{L.stopPropagation(),L.key==="Enter"&&A()}),l.append(I("div",{class:"pin-ask"},I("p",{},"\u8ACB\u7238\u7238\u5ABD\u5ABD\u8F38\u5165\u5BB6\u9577\u5BC6\u78BC\uFF1A\u5275\u9020\u6A21\u5F0F\u662F\u53E6\u4E00\u500B\u4E16\u754C\uFF0C\u65B9\u584A\u7121\u9650\u3001\u4E0D\u80FD\u8CFA\u91D1\u5E63\u3002"),I("div",{class:"typerow"},S,I("button",{class:"btn",onclick:A},"\u78BA\u5B9A")))),setTimeout(()=>S.focus(),50)}async function Ud(){await ln(!0);let l={};for(let _=0;_<localStorage.length;_++){let S=localStorage.key(_);/^hw_/.test(S)&&S!=="hw_mode"&&(l[S]=localStorage.getItem(S))}return{app:"hero-world",v:1,mode:n,at:new Date().toISOString(),db:await Pf(""),ls:l}}async function Jg(){try{let l=new Blob([JSON.stringify(await Ud())],{type:"application/json"}),_=I("a",{href:URL.createObjectURL(l),download:"\u65B9\u584A\u4E16\u754C\u5099\u4EFD_"+Gs()+".json"});document.body.append(_),_.click(),setTimeout(()=>{URL.revokeObjectURL(_.href),_.remove()},1500),vt("\u5099\u4EFD\u6A94\u4E0B\u8F09\u597D\u4E86\uFF0C\u597D\u597D\u6536\u8457")}catch(l){vt("\u532F\u51FA\u5931\u6557\uFF1A"+l.message)}}async function Kg(l){try{let _=JSON.parse(await l.text());if(!_||_.app!=="hero-world"||!_.db||typeof _.db!="object")throw new Error("\u9019\u4E0D\u662F\u65B9\u584A\u4E16\u754C\u7684\u5099\u4EFD\u6A94");if(!confirm("\u532F\u5165\u6703\u628A\u73FE\u5728\u9019\u500B\u4E16\u754C\u63DB\u6210\u5099\u4EFD\u88E1\u7684\u4E16\u754C\uFF08\u91D1\u5E63\u4E5F\u6703\u63DB\u6210\u5099\u4EFD\u7684\uFF09\uFF0C\u78BA\u5B9A\u55CE\uFF1F"))return;c.resetting=!0,await Lf([]),await Oc(_.db);for(let S in _.ls||{})/^hw_/.test(S)&&S!=="hw_mode"&&ni(S,_.ls[S]);location.reload()}catch(_){c.resetting=!1,vt("\u532F\u5165\u5931\u6557\uFF1A"+(_&&_.name==="QuotaExceededError"?"\u5132\u5B58\u7A7A\u9593\u4E0D\u5920":_.message))}}async function jg(){if(confirm("\u78BA\u5B9A\u8981\u91CD\u7F6E\u4E16\u754C\u55CE\uFF1F\u84CB\u597D\u7684\u6771\u897F\u6703\u5168\u90E8\u6D88\u5931\uFF08\u91D1\u5E63\u4FDD\u7559\uFF09\u3002")){c.resetting=!0,ni("hw_dim","overworld");try{await Lf(["hw_coins"])}catch(l){console.warn(l)}location.reload()}}function sn(l){document.pointerLockElement&&document.exitPointerLock(),c.overlay=l,kn(),xe("open:"+l,1),l==="inv"?(Kt=-1,Wt=null,tn()):l==="shop"?Tn():l==="set"?Nd():l==="furnace"?ri():l==="portal"?vi():l==="trade"?sh():l==="chest"?(Wt=null,Ht()):l==="map"?gh():l==="ach"?mx():l==="quests"?wx():l==="book"?(Jr=null,Kr()):l==="petname"?rx():l==="quiz"&&rg(gt.ov,{onAnswer:()=>xe("stele_answers"),onReward:_=>{Fn(D,_),Ln(),c.dirtyMeta=!0,ln()},onClose:()=>{c.overlay=null}})}function Pe(){if(c.overlay==="book")try{speechSynthesis.cancel()}catch{}gt.ov.hidden=!0,gt.ov.innerHTML="",c.overlay=null,es&&(es.busy=!1,es=null)}let Fd=()=>{gt.btnSnd.textContent=na()?"\u{1F507}":"\u{1F50A}"};gt.btnSnd.onclick=()=>{Vc(),Kf(),Fd()},["pointerdown","keydown"].forEach(l=>addEventListener(l,()=>Vc(),{capture:!0,once:!0})),Fd(),gt.btnInv.onclick=()=>c.overlay==="inv"?Pe():sn("inv"),gt.btnShop.onclick=()=>c.overlay==="shop"?Pe():sn("shop"),gt.btnSet.onclick=()=>c.overlay==="set"?Pe():sn("set"),gt.btnView.onclick=()=>Od(),gt.bRide.onclick=()=>$r(),gt.bMap.onclick=()=>c.overlay==="map"?Pe():sn("map"),gt.restOk.onclick=()=>{gt.rest.hidden=!0},gt.bQuest.onclick=()=>c.overlay==="quests"?Pe():sn("quests"),gt.bAch.onclick=()=>c.overlay==="ach"?Pe():sn("ach");function Od(){c.view=c.view==="fp"?"tp":"fp",vt(c.view==="fp"?"\u7B2C\u4E00\u4EBA\u7A31":"\u7B2C\u4E09\u4EBA\u7A31")}function zd(){c.ride||(c.fly=!c.fly,c.v.y=0,gt.root.classList.toggle("flying",c.fly),vt(c.fly?"\u98DB\u884C\uFF1A\u958B\uFF08\u8DF3\uFF1D\u4E0A\u5347\u3001\u4E0B\uFF1D\u4E0B\u964D\uFF09":"\u98DB\u884C\uFF1A\u95DC"))}let bi=new Q;function fa(){let l=Math.cos(c.pitch);return{x:-Math.sin(c.yaw)*l,y:Math.sin(c.pitch),z:-Math.cos(c.yaw)*l}}let Xr=()=>({x:c.p.x,y:c.p.y+1.62+c.eyeOff+(c.ride?Xg[c.ride.kind]:0),z:c.p.z}),Bd=l=>l&&!p.flat.liquid[l],oh=l=>p.flat.boxes[l]||(p.flat.shape[l]===4?qg:p.flat.shape[l]===8?Yg:null),Rs=p.get("scaffold")?p.num("scaffold"):-1,kd=l=>{let _=Math.floor(l.x),S=Math.floor(l.y),A=Math.floor(l.z);return p.flat.climb[ct.get(_,S,A)]===2?(L,z,K)=>L===_&&z===S&&K===A?0:ct.get(L,z,K):ii};function Vd(l){if(l.n!==Rs||l.face[1]===-1)return null;let _=l.y;for(;_<l.y+16&&ct.get(l.x,_+1,l.z)===Rs;)_++;let S=ct.get(l.x,_+1,l.z);return _+1<64&&(!S||p.flat.liquid[S])?{x:l.x,y:_+1,z:l.z}:null}function Bn(l,_,S){if(l==="screen"){bi.set(_/innerWidth*2-1,-(S/innerHeight)*2+1,.5).unproject(mt).sub(mt.position).normalize();let K=mt.position,at=c.view==="tp"?K.distanceTo(new Q(c.p.x,c.p.y+1.62,c.p.z)):0,st={x:K.x,y:K.y,z:K.z},bt={x:bi.x,y:bi.y,z:bi.z};c.lastRay={o:st,d:bt};let Vt=Nr(st,bt,Qc+1+at,kd(st),Bd,oh);return Vt&&(Vt.at={x:st.x+bt.x*Vt.dist,y:st.y+bt.y*Vt.dist,z:st.z+bt.z*Vt.dist}),Vt}let A=Xr(),L=fa();c.lastRay={o:A,d:L};let z=Nr(A,L,Qc,kd(A),Bd,oh);return z&&(z.at={x:A.x+L.x*z.dist,y:A.y+L.y*z.dist,z:A.z+L.z*z.dist}),z}function kn(){c.mining.active=!1,c.mining.k="",c.mining.t=0,oe.visible=!1}function Qg(l,_,S){Ke("door");let A=p.get(ct.get(l,_,S)),L=p.get(A.openAs||A.closeAs);if(!L)return;let z=at=>{let st=p.get(at);return st&&st.interact==="door"},K=_;for(;z(ct.get(l,K-1,S));)K--;for(let at=K;z(ct.get(l,at,S));at++)ct.set(l,at,S,L.n);c.dirtyMeta=!0}let Hd=()=>{let l=w.slots[c.sel];return l?p.toolOf(l.id):null};function tx(l){let _=l.n,S=t.creative?{time:t.breakTime,harvest:!1,usesTool:!1,creative:!0}:Wc(p.get(_),Hd());if(!ct.set(l.x,l.y,l.z,0))return;J.sendBlock(l.x,l.y,l.z,0);let A=l.x+","+l.y+","+l.z,L=p.get(_);if(it[A]){if(t.drops){for(let st of it[A].slots)if(st)for(let bt=0;bt<st.count;bt++)wt(st.id,l.x+.5,l.y+.4,l.z+.5)}delete it[A]}if(L&&L.crop){if(delete rt[A],t.drops)for(let st of Gf(L.stage|0))for(let bt=0;bt<st.n;bt++)wt(st.id,l.x+.5,l.y+.3,l.z+.5);c.stats.harvested=(c.stats.harvested||0)+(L.stage===3?1:0),L.stage===3&&xe("harvested"),c.dirtyMeta=!0;return}let z=S.harvest?p.dropOf(_):null;if(z&&wt(z,l.x+.5,l.y+.4,l.z+.5),t.drops&&L.pattern==="leaves"&&Math.random()<(f.appleChance||.1)?wt("apple",l.x+.5,l.y+.4,l.z+.5):!S.harvest&&!S.creative&&vt(`${p.name(_)}\u8981\u7528\u66F4\u597D\u7684\u5DE5\u5177\u6316\uFF0C\u624D\u6703\u6389\u6771\u897F`),L.id==="bamboo"||L.id==="scaffold")for(let st=l.y+1;ct.get(l.x,st,l.z)===_;st++)ct.set(l.x,st,l.z,0),t.drops&&wt(L.id,l.x+.5,st+.4,l.z+.5);let K=ct.get(l.x,l.y+1,l.z);if(p.flat.plant[K]){delete rt[l.x+","+(l.y+1)+","+l.z],ct.set(l.x,l.y+1,l.z,0);let st=t.drops&&p.dropOf(K);st&&wt(st,l.x+.5,l.y+1.3,l.z+.5)}if(p.get(_).interact==="door")for(let st of[-1,1]){let bt=ct.get(l.x,l.y+st,l.z);p.get(bt)&&p.get(bt).interact==="door"&&ct.set(l.x,l.y+st,l.z,0)}let at=l.x+","+l.y+","+l.z;if(c.bed&&c.bed.x===l.x&&c.bed.y===l.y&&c.bed.z===l.z&&(c.bed=null,vt("\u5E8A\u62C6\u6389\u4E86\uFF0C\u91CD\u751F\u9EDE\u6539\u56DE\u51FA\u751F\u9EDE")),tt[at]){let st=ud(tt[at]);for(let bt in st)for(let Vt=0;Vt<st[bt];Vt++)wt(bt,l.x+.5,l.y+.4,l.z+.5);delete tt[at]}if(S.usesTool){let st=kr(w,c.sel,p);st.broke&&vt(`\u4F60\u7684${p.name(st.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),X()}c.dirtyMeta=!0,c.stats.mined++,Ke("break",Br(L)),xe("mined"),xe("mine:"+(L.pattern==="log"?"wood":L.id))}function Zs(l){let _=w.slots[c.sel],S=_&&p.get(_.id);if(S&&S.food)return t.damage?(Yf(et,S.food,20)?(Ke("eat"),Un(w,c.sel,1),T(),X(),c.dirtyMeta=!0,vt(`\u5403\u4E86${S.name_zh}\uFF0C\u597D\u98FD\uFF01`),c.stats.ate=(c.stats.ate||0)+1):vt("\u73FE\u5728\u4E0D\u9913"),!0):(vt("\u5275\u9020\u6A21\u5F0F\u4E0D\u6703\u9913"),!0);if(S&&S.id==="shadow_flint"){if(!t.portals)return vt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u958B\u6697\u5F71\u50B3\u9001\u9580"),!0;let Tt=p.num("dark_crystal"),ne=l&&l.n===Tt?df((Le,fn,mn)=>ct.get(Le,fn,mn),l.x,l.y,l.z,Tt):null;if(!ne)return vt("\u5148\u7528 10 \u500B\u6697\u6676\u6392\u4E00\u500B\u6846\uFF08\u88E1\u9762\u7A7A 2 \u683C\u5BEC\u30013 \u683C\u9AD8\uFF09\uFF0C\u518D\u5C0D\u8457\u6846\u9EDE\u706B\u7A2E"),!1;let Re=p.num("shadow_portal");for(let Le of ne)ct.set(Le[0],Le[1],Le[2],Re);return xe("portal_lit"),Un(w,c.sel,1),X(),c.dirtyMeta=!0,vt(e==="shadow"?"\u50B3\u9001\u9580\u4EAE\u4E86\uFF01\u8D70\u9032\u53BB\u5C31\u80FD\u56DE\u5BB6":"\u6697\u5F71\u50B3\u9001\u9580\u4EAE\u4E86\uFF01\u8D70\u9032\u53BB\u5C31\u80FD\u5230\u6697\u5F71\u754C"),!0}if(S&&S.id==="fishing_rod")return c.fish?lx():ax(),!0;if(S&&S.id==="bow")return ph(),!0;if(S&&S.id==="book")return sn("book"),!0;if(S&&S.place==="boat"){if(c.ride)return vt("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let Tt=c.lastRay,ne=Tt&&Nr(Tt.o,Tt.d,Qc+1,ii,Le=>p.flat.liquid[Le]||p.flat.solid[Le]);if(!ne||!p.flat.liquid[ne.n]||ct.get(ne.x,ne.y+1,ne.z))return vt("\u8239\u8981\u653E\u5728\u6C34\u9762\u4E0A"),!1;c.p={x:ne.x+.5,y:ne.y+1-.15,z:ne.z+.5};let Re=ah("boat",c.p,c.yaw,{y:ne.y+1});return t.consume&&Un(w,c.sel,1),X(),Yr("boat",{y:ne.y+1,veh:Re}),!0}if(S&&S.place==="minecart"){if(c.ride)return vt("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let Tt=l&&p.get(l.n);if(!Tt||!Tt.rail)return vt("\u7926\u8ECA\u8981\u653E\u5728\u9435\u8ECC\u4E0A"),!1;let ne=nf(Tt.rail,l.x,l.y,l.z,-Math.sin(c.yaw),-Math.cos(c.yaw),fn=>!!qo(ts,l.x,l.y,l.z,fn,Tt.rail)),Re=Cc(ne),Le=ah("minecart",{x:Re.x,y:Re.y+.05,z:Re.z},Re.yaw,{st:ne});return t.consume&&Un(w,c.sel,1),X(),Yr("minecart",{st:ne,veh:Le}),!0}if(!l)return!1;let A=p.get(l.n);if(A&&A.interact==="chest"){if(Ke("chest"),de=l.x+","+l.y+","+l.z,A.id==="loot_chest"&&!it[de]){let Tt=E.ruins&&E.ruins.at(l.x,l.z);it[de]=i0(Dc,(h.loot||{})[Tt?Tt.kind:"forest_ruins"],n0(l.x,l.y,l.z),y),xe("loot"),vt("\u627E\u5230\u907A\u8DE1\u7684\u5BF6\u7BB1\u4E86\uFF01"),c.dirtyMeta=!0}return sn("chest"),!0}let L=S&&p.toolOf(_.id);if(L&&L.type==="hoe"&&Hf(A.id,!ct.get(l.x,l.y+1,l.z)||p.flat.plant[ct.get(l.x,l.y+1,l.z)])){if(ct.set(l.x,l.y+1,l.z,0),ct.set(l.x,l.y,l.z,p.num("farmland")),t.consume){let Tt=kr(w,c.sel,p);Tt.broke&&vt(`\u4F60\u7684${p.name(Tt.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`)}return X(),c.dirtyMeta=!0,!0}if(S&&S.place==="crop")return A.id!=="farmland"||l.face[1]!==1||ct.get(l.x,l.y+1,l.z)?(vt("\u7A2E\u5B50\u8981\u7A2E\u5728\u8015\u5730\u4E0A\uFF08\u5148\u7528\u92E4\u982D\u92E4\u5730\uFF09"),!1):(ct.set(l.x,l.y+1,l.z,p.num("wheat_0")),rt[l.x+","+(l.y+1)+","+l.z]={t:Date.now(),wet:Wf(ii,Tt=>p.flat.liquid[Tt]===1,l.x,l.y,l.z)},t.consume&&Un(w,c.sel,1),X(),c.dirtyMeta=!0,c.stats.planted=(c.stats.planted||0)+1,!0);let z=p.get(l.n);if(z&&z.interact==="riddle")return Mx(l),!0;if(z&&z.interact==="quiz")return t.coins?(sn("quiz"),!0):(vt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u8CFA\u91D1\u5E63\uFF0C\u56DE\u751F\u5B58\u6A21\u5F0F\u518D\u4F86\u7B54\u984C\u5427"),!0);let K=w.slots[c.sel]&&p.get(w.slots[c.sel].id).placeable;if(z&&z.interact==="door")return Qg(l.x,l.y,l.z),!0;if(z&&z.interact==="portal"&&!K&&!t.portals)return vt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u9032\u50B3\u9001\u9580"),!0;if(z&&z.interact==="portal"&&!K)return De=z.portal,sn("portal"),!0;if(z&&z.interact==="bed"&&!K&&e==="shadow")return vt("\u6697\u5F71\u754C\u7761\u4E0D\u8457\uFF0C\u5E8A\u53EA\u80FD\u5728\u539F\u672C\u7684\u4E16\u754C\u8A2D\u91CD\u751F\u9EDE"),!0;if(z&&z.interact==="bed"&&!K)return c.bed={x:l.x,y:l.y,z:l.z},c.dirtyMeta=!0,xe("bed"),vt("\u91CD\u751F\u9EDE\u8A2D\u597D\u4E86\uFF1A\u6688\u5012\u6703\u56DE\u5230\u9019\u5F35\u5E8A"),!0;if(z&&z.interact==="craft"&&!K)return sn("inv"),!0;if(z&&z.interact==="furnace"&&!K)return zn=l.x+","+l.y+","+l.z,sn("furnace"),!0;let at=w.slots[c.sel];if(!at)return vt("\u5FEB\u6377\u5217\u9019\u683C\u662F\u7A7A\u7684"),!1;let st=p.get(at.id);if(!st||!st.placeable)return vt(`${p.name(at.id)} \u4E0D\u80FD\u653E`),!1;if(st.id==="scaffold"&&l.n===Rs&&l.face[1]!==-1){let Tt=Vd(l);return!Tt||!ct.set(Tt.x,Tt.y,Tt.z,Rs)?(vt("\u9019\u6839\u9DF9\u67B6\u4E0A\u9762\u653E\u4E0D\u4E0B\u4E86"),!1):(J.sendBlock(Tt.x,Tt.y,Tt.z,Rs),Ke("place","wood"),t.consume&&Un(w,c.sel,1),c.dirtyMeta=!0,X(),c.stats.placed++,ha(Tt.x,Tt.y,Tt.z,st.id),!0)}if(st.place==="slab"&&st.fullAs&&l.n===st.n&&l.face[1]===1&&ct.set(l.x,l.y,l.z,p.num(st.fullAs)))return t.consume&&Un(w,c.sel,1),X(),c.stats.placed++,c.dirtyMeta=!0,!0;let bt=p.flat.plant[l.n]&&!p.flat.plant[st.n],Vt=bt?l.x:l.x+l.face[0],Jt=bt?l.y:l.y+l.face[1],ie=bt?l.z:l.z+l.face[2];if(Jt<0||Jt>=64)return!1;let we=ct.get(Vt,Jt,ie);if(we&&!p.flat.liquid[we]&&!(bt&&p.flat.plant[we]))return!1;let Te=.6/2;if(st.solid&&Vt+1>c.p.x-Te&&Vt<c.p.x+Te&&ie+1>c.p.z-Te&&ie<c.p.z+Te&&Jt+1>c.p.y&&Jt<c.p.y+1.8)return!1;if(p.flat.plant[st.n]&&!p.flat.solid[ct.get(Vt,Jt-1,ie)])return vt(`${st.name_zh}\u8981\u7A2E\u5728\u5730\u4E0A`),!1;let rn=st.n;if(st.place==="slab"){let Tt=l.at?l.at.y-Math.floor(l.at.y):0;(l.face[1]===-1||l.face[1]===0&&Tt>.5)&&p.get(st.id+"_top")&&(rn=p.num(st.id+"_top"))}else if(st.place==="stairs"){let Tt=-Math.sin(c.yaw),ne=-Math.cos(c.yaw),Re=Math.abs(Tt)>Math.abs(ne)?Tt>0?1:3:ne>0?2:0,Le=p.get(st.id+["","_e","_s","_w"][Re]);Le&&(rn=Le.n)}let ce=null;if(st.place==="rail"){if(!p.flat.solid[ct.get(Vt,Jt-1,ie)])return vt("\u9435\u8ECC\u8981\u653E\u5728\u5730\u4E0A"),!1;let Tt=-Math.sin(c.yaw),ne=-Math.cos(c.yaw),Re=Tc(ts,Vt,Jt,ie,!!st.powered,Math.abs(Tt)>Math.abs(ne)?"e":"n");rn=p.num(Xo(!!st.powered,Re.shape)),ce=Re.updates}if(!ct.set(Vt,Jt,ie,rn))return!1;if(J.sendBlock(Vt,Jt,ie,rn),ce)for(let[Tt,ne,Re,Le]of ce){let fn=ts(Tt,ne,Re);fn&&ct.set(Tt,ne,Re,p.num(Xo(fn.powered,Le)))}return Ke("place",Br(st)),st.interact==="door"&&!ct.get(Vt,Jt+1,ie)&&ct.set(Vt,Jt+1,ie,st.n),t.consume&&Un(w,c.sel,1),c.dirtyMeta=!0,X(),c.stats.placed++,ha(Vt,Jt,ie,st.id),!0}let qr={},Js=l=>qr[l]||(qr[l]=(()=>{let _=new Mn({color:l});return _.userData.base=new ue(l),_})());function ex(l){let _=new gn,S=(A,L,z,K,at,st,bt)=>{let Vt=new Ne(new Je(A,L,z),Js(K));Vt.position.set(at,st,bt),_.add(Vt)};if(l==="boat"){S(.9,.08,1.5,"#8C6640",0,.04,0);for(let A of[-1,1])S(.08,.3,1.5,"#A97E4E",A*.45,.19,0),S(.9,.3,.08,"#A97E4E",0,.19,A*.75);S(.9,.06,.25,"#C49A63",0,.25,.1)}else{S(.9,.08,1.1,"#5E6660",0,.12,0);for(let A of[-1,1])S(.08,.45,1.1,"#8C8A84",A*.45,.35,0),S(.9,.45,.08,"#8C8A84",0,.35,A*.55),S(.06,.18,.18,"#26302A",A*.47,.1,.35),S(.06,.18,.18,"#26302A",A*.47,.1,-.35)}return _}c.vehicles=[];function ah(l,_,S,A){let L=ex(l);L.rotation.order="YXZ",L.position.set(_.x,_.y,_.z),L.rotation.y=S,Y.add(L);let z=Object.assign({kind:l,p:{x:_.x,y:_.y,z:_.z},yaw:S,obj:L,hits:0},A);return z.m={kind:"vehicle",veh:z,id:-2},c.vehicles.push(z),z}function lh(l){c.ride||c.dead||(c.p={x:l.p.x,y:l.p.y,z:l.p.z},l.kind==="boat"?Yr("boat",{y:l.y,veh:l}):(l.st.v=0,Yr("minecart",{st:l.st,veh:l})))}function ch(l){if(!(c.ride&&c.ride.veh===l)){if(l.hits++,l.hits<2){vt("\u518D\u6253\u4E00\u4E0B\u5C31\u80FD\u6536\u8D77\u4F86"),l.obj.position.y=l.p.y+.15,setTimeout(()=>{l.obj.position.y=l.p.y},120);return}c.vehicles.splice(c.vehicles.indexOf(l),1),Y.remove(l.obj),wt(l.kind,l.p.x,l.p.y+.5,l.p.z),c.dirtyMeta=!0,vt(l.kind==="boat"?"\u8239\u6536\u8D77\u4F86\u4E86":"\u7926\u8ECA\u6536\u8D77\u4F86\u4E86")}}let Ks=new gn,Gd=new Mn({color:15723485,transparent:!0,opacity:.38,depthWrite:!1}),hh=[0,1].map(()=>{let l=new Ne(new Je(1,1,1),Gd);return Ks.add(l),l});Ks.visible=!1,Y.add(Ks);function nx(l){let _=w.slots[c.sel],S=_&&p.get(_.id);if(!l||!S||!S.placeable)return null;let A=p.get(l.n);if(A&&["chest","quiz","door"].includes(A.interact))return null;if(S.place==="slab"&&S.fullAs&&l.n===S.n&&l.face[1]===1)return{x:l.x,y:l.y,z:l.z,n:p.num(S.fullAs)};if(S.id==="scaffold"&&l.n===Rs&&l.face[1]!==-1){let Vt=Vd(l);return Vt?Object.assign(Vt,{n:Rs}):null}let L=p.flat.plant[l.n]&&!p.flat.plant[S.n],z=L?l.x:l.x+l.face[0],K=L?l.y:l.y+l.face[1],at=L?l.z:l.z+l.face[2];if(K<0||K>=64)return null;let st=ct.get(z,K,at);if(st&&!p.flat.liquid[st]&&!(L&&p.flat.plant[st]))return null;let bt=S.n;if(S.place==="slab"){let Vt=l.at?l.at.y-Math.floor(l.at.y):0;(l.face[1]===-1||l.face[1]===0&&Vt>.5)&&p.get(S.id+"_top")&&(bt=p.num(S.id+"_top"))}else if(S.place==="stairs"){let Vt=-Math.sin(c.yaw),Jt=-Math.cos(c.yaw),ie=Math.abs(Vt)>Math.abs(Jt)?Vt>0?1:3:Jt>0?2:0,we=p.get(S.id+["","_e","_s","_w"][ie]);we&&(bt=we.n)}else if(S.place==="rail"){if(!p.flat.solid[ct.get(z,K-1,at)])return null;let Vt=-Math.sin(c.yaw),Jt=-Math.cos(c.yaw);bt=p.num(Xo(!!S.powered,Tc(ts,z,K,at,!!S.powered,Math.abs(Vt)>Math.abs(Jt)?"e":"n").shape))}return{x:z,y:K,z:at,n:bt}}function ix(l){let _=nx(l);if(!_){Ks.visible=!1;return}let S=p.flat.shape[_.n],A=p.flat.boxes[_.n]||(S===4?qg:S===8?Yg:S>=1&&S<=3?t1:QS);hh.forEach((L,z)=>{let K=A[z];L.visible=!!K,K&&(L.scale.set((K[3]-K[0])*.98,(K[4]-K[1])*.98,(K[5]-K[2])*.98),L.position.set(_.x+(K[0]+K[3])/2,_.y+(K[1]+K[4])/2,_.z+(K[2]+K[5])/2))}),Ks.visible=!0}function Wd(l){l.saddled=!0;let _=xt.get(l.id);if(!_)return;let S=new Ne(new Je(.62,.1,.6),Js("#5C3A24"));S.position.set(0,1.4,.05),_.add(S)}function Yr(l,_){let S=_.veh?_.veh.obj:null;c.ride=Object.assign({kind:l,obj:S,yaw:_.veh?_.veh.yaw:c.yaw},_),c.fly=!1,gt.root.classList.remove("flying"),c.v={x:0,y:0,z:0},gt.bRide.hidden=!1,kn(),xe("ride:"+l),xe("ride"),vt({boat:"\u4E0A\u8239\u4E86\uFF01\u7528\u8D70\u8DEF\u7684\u65B9\u5F0F\u5212\u8239\uFF0C\u6309\u300C\u4E0B\u4F86\u300D\u4E0A\u5CB8",minecart:"\u5750\u4E0A\u7926\u8ECA\uFF01\u5F80\u524D\u63A8\u5C31\u51FA\u767C\uFF0C\u91D1\u8272\u9435\u8ECC\u6703\u52A0\u901F",horse:"\u9A0E\u4E0A\u99AC\u4E86\uFF01\u8DD1\u5F97\u66F4\u5FEB\u3001\u8DF3\u5F97\u66F4\u9AD8"}[l])}function $r(l){let _=c.ride;if(_){if(c.ride=null,gt.bRide.hidden=!0,_.veh&&(_.veh.p={x:c.p.x,y:c.p.y,z:c.p.z},_.veh.yaw=_.yaw,_.st&&(_.st.v=0,_.veh.st=_.st)),_.kind==="horse"&&(_.m.riding=!1),_.kind==="minecart")c.p.y+=.2;else for(let[S,A]of[[1,0],[-1,0],[0,1],[0,-1],[1.5,0],[-1.5,0],[0,1.5],[0,-1.5]]){let L={x:c.p.x+S,y:Math.floor(c.p.y+.5),z:c.p.z+A};if(a0(L,dt)&&p.flat.solid[ct.get(L.x,L.y-1,L.z)]){c.p=L;break}}c.v={x:0,y:0,z:0},c.fallTop=c.p.y,l||vt("\u4E0B\u4F86\u4E86")}}function sx(l){let _=w.slots[c.sel];if(!l.tame){_&&(_.id==="wheat"||_.id==="apple")?(t.consume&&Un(w,c.sel,1),X(),l.fed=(l.fed||0)+1,l.fed>=3?(l.tame=!0,c.horseMob=l,c.dirtyMeta=!0,vt("\u99AC\u5152\u8DDF\u4F60\u8B8A\u6210\u597D\u670B\u53CB\u4E86\uFF01\u88DD\u4E0A\u99AC\u978D\u5C31\u80FD\u9A0E")):vt(`\u99AC\u5152\u5403\u5F97\u597D\u958B\u5FC3\uFF08${l.fed}/3\uFF09`)):vt("\u99AC\u5152\u6709\u9EDE\u5BB3\u7F9E\uFF0C\u9935\u7260 3 \u500B\u5C0F\u9EA5\u6216\u860B\u679C\u8A66\u8A66\u770B");return}if(!l.saddled){_&&_.id==="saddle"?(t.consume&&Un(w,c.sel,1),X(),Wd(l),c.horseMob=l,c.dirtyMeta=!0,vt("\u88DD\u597D\u99AC\u978D\u4E86\uFF01\u518D\u9EDE\u4E00\u4E0B\u99AC\u5152\u5C31\u80FD\u9A0E\u4E0A\u53BB")):vt("\u8981\u5148\u5E6B\u99AC\u5152\u88DD\u4E0A\u99AC\u978D\uFF08\u5546\u5E97\u6216\u6751\u838A\u7684\u5546\u4EBA\u6709\u8CE3\uFF09");return}c.ride||(l.riding=!0,c.p={x:l.p.x,y:l.p.y,z:l.p.z},Yr("horse",{m:l}),c.stats.rodeHorse=(c.stats.rodeHorse||0)+1)}function Xd(l){let _=xt.get(l.id);if(!_||_.userData.collar)return;let[S,A]=l.def.size,L=new Ne(new Je(.34,.07,.36),Js("#E0352B"));L.position.set(0,A-.25,-S*.62),_.add(L),_.userData.collar=L}function qd(l){let _=w.slots[c.sel],S=l.def.name_zh,A=$c(l.def).map(z=>p.name(z)).join("\u6216");if(l.tame&&_&&_.id==="paper"){uh=l,sn("petname");return}if(l.tame){l.sit=!l.sit,c.dirtyMeta=!0,vt(l.sit?`${l.name||S}\u4E56\u4E56\u5750\u4E0B\u4F86\u7B49\u4F60`:`${l.name||S}\u8DDF\u8457\u4F60\u8D70`);return}let L=Ed(l,_&&_.id,Rt.list.filter(z=>z.tame&&qs(z)&&!z.gone).length);if(!L.ok){vt(`${S}\u6709\u9EDE\u5BB3\u7F9E\uFF0C\u9935\u7260${A}\u8A66\u8A66\u770B`);return}if(t.consume&&Un(w,c.sel,1),X(),Ke("eat"),L.full){vt(`\u5BF5\u7269\u6700\u591A ${Xs} \u96BB\uFF0C${S}\u5148\u7576\u670B\u53CB\u5C31\u597D`);return}if(!L.tamed){vt(`${S}\u5403\u5F97\u597D\u958B\u5FC3\uFF08${L.fed}/${L.need}\uFF09`);return}Xd(l),c.dirtyMeta=!0,xe("tamed"),ln(),vt(`${S}\u8B8A\u6210\u4F60\u7684\u5BF5\u7269\u4E86\uFF01\u7260\u6703\u8DDF\u8457\u4F60\u8D70\uFF1B\u9EDE\u7260\u4E00\u4E0B\uFF1D\u5750\u4E0B\uFF0F\u8DDF\u8457\u8D70`+(l.def.guard?"\u3002\u665A\u4E0A\u7260\u6703\u5E6B\u4F60\u64CB\u4F4F\u932F\u984C\u602A":"")),uh=l,sn("petname")}let uh=null;function Yd(l){let _=xt.get(l.id);if(!_)return;let S=_.userData.tag;if(S&&(_.remove(S),S.material.map.dispose(),S.material.dispose(),_.userData.tag=null),!l.name)return;let A=document.createElement("canvas");A.width=256,A.height=64;let L=A.getContext("2d");L.font="bold 34px sans-serif";let z=Math.min(250,L.measureText(l.name).width+30);L.fillStyle="rgba(239,235,221,.92)",L.fillRect(128-z/2,8,z,48),L.fillStyle="#26302A",L.textAlign="center",L.textBaseline="middle",L.fillText(l.name,128,33);let K=new Gn(A);K.colorSpace=en;let at=new ds(new qi({map:K,depthWrite:!1}));at.scale.set(1.1,.275,1),at.position.y=l.def.size[1]+.35,_.add(at),_.userData.tag=at}function rx(){let l=uh,_=gt.ov;if(!l||l.gone){Pe();return}_.innerHTML="",_.hidden=!1;let S=I("input",{class:"typein",type:"text",maxlength:"12",autocomplete:"off",value:l.name||"",placeholder:"\u4F8B\u5982\uFF1A\u5C0F\u9ED1","aria-label":"\u5BF5\u7269\u7684\u540D\u5B57"}),A=()=>{let L=ra(S.value);l.name=L,Yd(l),c.dirtyMeta=!0,L&&(xe("pet_named"),vt(`${l.def.name_zh}\u7684\u540D\u5B57\u53EB\u300C${L}\u300D\u4E86\uFF01`)),Pe(),ln()};S.addEventListener("keydown",L=>{L.stopPropagation(),L.key==="Enter"&&A()}),_.append(I("div",{class:"panel start"},I("div",{class:"p-head"},I("h2",{},`\u5E6B${l.def.name_zh}\u53D6\u540D\u5B57`),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Pe},"\xD7")),I("p",{},"\u540D\u5B57\u6703\u51FA\u73FE\u5728\u7260\u982D\u4E0A\uFF08\u6700\u591A 12 \u500B\u5B57\uFF09\u3002\u4EE5\u5F8C\u62FF\u4E00\u5F35\u300C\u7D19\u300D\u9EDE\u7260\uFF0C\u5C31\u80FD\u6539\u540D\u5B57\u3002"),I("div",{class:"typerow"},S,I("button",{class:"btn",onclick:A},"\u597D\u4E86")),I("div",{class:"row"},I("button",{class:"btn ghost",onclick:Pe},"\u5148\u4E0D\u8981")))),setTimeout(()=>S.focus(),50)}function ox(l,_,S,A,L,z,K){let at=c.ride;if(at.kind==="boat"){let st=(A*S+z*_)*7,bt=(L*S+K*_)*7,Vt=1-Math.exp(-2.5*l);c.v.x+=(st-c.v.x)*Vt,c.v.z+=(bt-c.v.z)*Vt,c.v.y=0;let Jt=(Te,rn)=>p.flat.liquid[ct.get(Te,at.y-1,rn)]===1&&!p.flat.solid[ct.get(Te,at.y,rn)],ie=c.p.x+c.v.x*l,we=c.p.z+c.v.z*l;Jt(ie+Math.sign(c.v.x)*.6,c.p.z)?c.p.x=ie:c.v.x=0,Jt(c.p.x,we+Math.sign(c.v.z)*.6)?c.p.z=we:c.v.z=0,c.p.y=at.y-.15,Math.hypot(c.v.x,c.v.z)>.3&&(at.yaw=Math.atan2(-c.v.x,-c.v.z))}else{sf(at.st,l,S,ts);let st=Cc(at.st);c.p.x=st.x,c.p.z=st.z,c.p.y=st.y+.05,at.yaw=st.yaw,at.pitch=st.pitch,c.v.x=c.v.z=c.v.y=0}c.fallTop=c.p.y}let fh=(()=>{let l=new gn,_=new Ne(new Je(.16,.1,.16),Js("#E0352B")),S=new Ne(new Je(.16,.08,.16),Js("#EFEBDD"));return _.position.y=.05,S.position.y=-.04,l.add(_,S),l.visible=!1,Y.add(l),l})();function ax(){let l=c.lastRay,_=l&&Nr(l.o,l.d,Qc+3,ii,S=>p.flat.liquid[S]||p.flat.solid[S]);return!_||!p.flat.liquid[_.n]||ct.get(_.x,_.y+1,_.z)?(vt("\u8981\u628A\u9B5A\u7DDA\u7529\u5230\u6C34\u9762\u4E0A"),!1):(c.fish=of(Math.random),c.fish.at={x:_.x+.5,y:_.y+1,z:_.z+.5},fh.visible=!0,vt("\u7529\u7AFF\uFF01\u7B49\u6D6E\u6A19\u5F80\u4E0B\u6C89\uFF0C\u518D\u9EDE\u4E00\u4E0B\u6536\u7DDA"),!0)}function dh(){c.fish=null,fh.visible=!1}function lx(){let l=lf(c.fish);if(dh(),l!=="catch"){vt("\u592A\u65E9\u6536\u7DDA\u4E86\uFF0C\u9B5A\u9084\u6C92\u4E0A\u9264\uFF0C\u518D\u7529\u4E00\u6B21");return}let _=f.fishing.loot,S=cf(_,Math.random);if(S.coins&&!t.coins&&(S=_[0]),S.coins)Fn(D,S.coins),Ln(),vt(`\u91E3\u5230\u4E00\u500B\u5C0F\u9322\u888B\uFF01 +${S.coins} \u91D1\u5E63`);else{let A=wn(w,S.id,S.n,y);for(let L=0;L<A;L++)wt(S.id,c.p.x,c.p.y+1,c.p.z);vt(S.treasure?`\u6488\u5230\u5BF6\u7269\uFF1A${p.name(S.id)} \xD7${S.n}\uFF01`:"\u91E3\u5230\u4E00\u689D\u9B5A\uFF01")}t.consume&&kr(w,c.sel,p).broke&&vt("\u91E3\u7AFF\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u652F\u5427\uFF01"),X(),c.dirtyMeta=!0,Ke("pickup"),xe("fish"),S.treasure&&xe("treasure")}let cx=new Je(.05,.05,.62);c.arrows=[];function ph(l=0){let _=performance.now()/1e3;if(_-(c.bowT||0)<Md)return;if(t.consume&&Yn(w,"arrow")<1){vt("\u6C92\u6709\u7BAD\u4E86\uFF1A\u7FBD\u6BDB\uFF0B\u6728\u68CD\uFF0B\u9D5D\u5375\u77F3\u53EF\u4EE5\u505A 4 \u652F\u7BAD");return}c.bowT=_;let S=c.lastRay||{o:Xr(),d:fa()},A=bd({x:S.o.x+S.d.x*.6,y:S.o.y+S.d.y*.6,z:S.o.z+S.d.z*.6},S.d,l);A.obj=new Ne(cx,Js(A.power>1?"#E0352B":"#8C6640")),Y.add(A.obj),c.arrows.push(A),t.consume&&(Vs(w,"arrow",1),kr(w,c.sel,p).broke&&vt("\u5F13\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01")),X(),c.dirtyMeta=!0,Ke("place","wood"),xe("shot"),A.power>1&&xe("shot_full")}let Zr=l=>{let _=w.slots[c.sel];return!!_&&_.id===l};function da(l){return c.charge||!Zr("bow")?!!c.charge:t.consume&&Yn(w,"arrow")<1?(vt("\u6C92\u6709\u7BAD\u4E86\uFF1A\u7FBD\u6BDB\uFF0B\u6728\u68CD\uFF0B\u9D5D\u5375\u77F3\u53EF\u4EE5\u505A 4 \u652F\u7BAD"),!1):(c.charge={t0:l||performance.now()},gt.charge.hidden=!1,gt.chargeBar.style.width="0%",!0)}function $d(){c.charge=null,gt.charge.hidden=!0,gt.charge.classList.remove("full")}function pa(l,_,S){let A=c.charge;A&&($d(),Bn(l,_,S),ph(Yc((performance.now()-A.t0)/1e3)))}function hx(l){if(!c.arrows.length||!l)return;let _=Rt.list.filter(S=>!S.gone&&!S.riding&&(S.kind==="quiz"||S.kind==="animal"&&!S.def.noHit&&!S.tame&&S.type!=="horse")).map(S=>({p:S.p,w:S.def.size[0],h:S.def.size[1],ref:S}));c.boss&&_.push({p:c.boss.p,w:3.6,h:3.6,ref:c.boss.m});for(let S=c.arrows.length-1;S>=0;S--){let A=c.arrows[S],L=Sd(A,l,dt,_);A.obj.position.set(A.p.x,A.p.y,A.p.z),bi.set(A.p.x+A.v.x,A.p.y+A.v.y,A.p.z+A.v.z),A.obj.lookAt(bi),L&&(Y.remove(A.obj),c.arrows.splice(S,1),L.hit==="mob"?(xe("arrow_hit"),Ys(L.target,A.power||1)):L.hit==="block"&&t.consume&&wt("arrow",A.p.x,A.p.y,A.p.z))}}let ns=x.books||[],ux=l=>{if(!(Dd||!("speechSynthesis"in window)))try{speechSynthesis.cancel();let _=new SpeechSynthesisUtterance(l);_.lang="en-US",_.rate=.85,speechSynthesis.speak(_)}catch{}},mh=l=>Z["book:"+l.id]===Gs(),js=l=>!!(b.stats["read:"+l.id]||Z["book:"+l.id]),Jr=null,Qs=!1;function Kr(){let l=gt.ov;l.innerHTML="",l.hidden=!1;let _=ns.find(A=>A.id===Jr),S=A=>I("div",{class:"p-head"},I("h2",{},A),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Pe},"\xD7"));if(!_){let A=I("div",{class:"shop"}),L=oa(ns,js),z=Gs();_i.forEach(K=>{let at=ns.filter(st=>Hr(st)===K);if(at.length){if(A.append(I("h3",{class:"book-lv"},`${Zc[K]}\u3000\u8B80\u61C2 ${at.filter(js).length} / ${at.length}`)),!L.has(K)){A.append(I("div",{class:"offer locked"},I("div",{class:"of-t"},I("b",{},`\u9084\u6C92\u6253\u958B\uFF08${at.length} \u7BC7\uFF09`),I("small",{},`\u518D\u8B80\u61C2 ${Vg(ns,js,K)} \u7BC7\u4E0A\u4E00\u7D1A\u7684\u66F8\u5C31\u6703\u6253\u958B`))));return}at.forEach(st=>A.append(I("div",{class:"offer"+(mh(st)?" locked":"")},I("img",{src:Pt.book,alt:""}),I("div",{class:"of-t"},I("b",{class:"en"},st.title),I("small",{},st.title_zh+(mh(st)?"\u3000\u2713 \u4ECA\u5929\u7B54\u5C0D\u4E86":t.coins?Ld(x,st,Z,z)?`\u3000\u8B80\u5B8C\u7B54\u5C0D +${x.coins|0} \u91D1\u5E63`:"\u3000\u4ECA\u5929\u7684\u8B80\u66F8\u91D1\u5E63\u9818\u5B8C\u4E86":"")+(js(st)?"":"\u3000\uFF08\u65B0\uFF09"))),I("button",{class:"btn small",onclick:()=>{Jr=st.id,Qs=!1,Kr()}},"\u8B80"))))}}),l.append(I("div",{class:"panel"},S("\u82F1\u6587\u5C0F\u66F8"),I("p",{class:"muted"},`\u6311\u4E00\u7BC7\u4F86\u8B80\uFF0C\u8B80\u5B8C\u56DE\u7B54\u4E00\u500B\u554F\u984C\u3002\u6BCF\u7BC7\u6BCF\u5929\u7B54\u5C0D\u7B2C\u4E00\u6B21\u6709\u91D1\u5E63\uFF08\u4E00\u5929\u6700\u591A ${x.dailyCap??ns.length} \u7BC7\uFF09\u3002\u8B80\u61C2 ${Jc} \u7BC7\u4E0D\u540C\u7684\uFF0C\u5C31\u6703\u6253\u958B\u4E0B\u4E00\u7D1A\u3002`),A));return}l.append(I("div",{class:"panel book"},S(_.title_zh),I("small",{class:"muted"},Zc[Hr(_)]),I("h3",{class:"en"},_.title),I("p",{class:"book-text en"},_.en),Qs?I("p",{class:"book-text zh"},_.zh):null,I("div",{class:"row"},I("button",{class:"btn ghost",onclick:()=>{Qs=!Qs,Kr()}},Qs?"\u96B1\u85CF\u4E2D\u6587":"\u770B\u4E2D\u6587\u7FFB\u8B6F"),I("button",{class:"btn ghost",onclick:()=>ux(_.en)},"\u{1F50A} \u6717\u8B80")),I("div",{class:"row"},I("button",{class:"btn",onclick:()=>fx(_)},"\u8B80\u5B8C\u4E86\uFF0C\u56DE\u7B54\u554F\u984C"),I("button",{class:"btn ghost",onclick:()=>{Jr=null,Kr()}},"\u2190 \u63DB\u4E00\u672C"))))}function fx(l){try{speechSynthesis.cancel()}catch{}let _=l.q.options.slice().sort(()=>Math.random()-.5),S={id:"hwbook:"+l.id,module:"reading",tkey:"\u82F1\u6587\u5C0F\u66F8",type:"reading",local:!0,title:l.title,prompt:l.q.prompt,sub:Qs?l.q.zh:"",options:_,answer:l.q.options[0],en:!0,why:""};c.overlay="ask",ta(gt.ov,{question:S,title:"\u82F1\u6587\u5C0F\u66F8\uFF1A"+l.title,okText:"\u7B54\u5C0D\u4E86\uFF01\u4F60\u770B\u61C2\u9019\u7BC7\u6545\u4E8B\u4E86",onDone:A=>{if(c.overlay="book",A){let L=Gs(),z=!mh(l),K=t.coins?Ld(x,l,Z,L):0,at=oa(ns,js);Z["book:"+l.id]=L,K&&(Fn(D,K),Ln()),b.stats["read:"+l.id]||xe("books_read"),xe("read:"+l.id),xe("books"),c.dirtyMeta=!0,ln(),vt(K?`\u8B80\u61C2\u4E86\uFF01 +${K} \u91D1\u5E63`:z&&t.coins?"\u8B80\u61C2\u4E86\uFF01\uFF08\u4ECA\u5929\u7684\u8B80\u66F8\u91D1\u5E63\u9818\u5B8C\u4E86\uFF09":"\u8B80\u61C2\u4E86\uFF01"),Jr=null;for(let st of oa(ns,js))at.has(st)||vt(`\u6253\u958B\u65B0\u7684\u66F8\u4E86\uFF1A${Zc[st]}`)}else A===!1&&vt("\u518D\u8B80\u4E00\u6B21\u770B\u770B\uFF0C\u7B54\u6848\u5C31\u5728\u6545\u4E8B\u88E1\uFF01");Kr()}})}let is=2,ma=An("hw_minimap","on")!=="off";function dx(l){ma=l,ni("hw_minimap",l?"on":"off"),gt.mini.hidden=!l}gt.mini.hidden=!ma;function px(){let l=gt.mini,_=l.getContext("2d");_.fillStyle="#D9D3C0",_.fillRect(0,0,l.width,l.height),k.draw(_,c.p.x,c.p.z,2,l.width,l.height),uf(_,l.width/2,l.height/2,c.yaw,7,"#E0352B")}function gh(){let l=gt.ov;l.innerHTML="",l.hidden=!1;let _=Math.max(240,Math.min(innerWidth-60,760)),S=Math.max(200,Math.min(innerHeight-200,540)),A=I("canvas",{class:"bigmap",width:_,height:S}),L=A.getContext("2d");L.fillStyle="#D9D3C0",L.fillRect(0,0,_,S);let{x0:z,z0:K}=k.draw(L,c.p.x,c.p.z,is,_,S),at=(ie,we)=>[(ie-z)*is,(we-K)*is],st=(ie,we,Te,rn,ce)=>{let[Tt,ne]=at(ie,we);Tt<-20||ne<-20||Tt>_+20||ne>S+20||(L.fillStyle=rn,L.strokeStyle=rn,L.lineWidth=3,ce==="roof"?(L.beginPath(),L.moveTo(Tt-8,ne+1),L.lineTo(Tt,ne-7),L.lineTo(Tt+8,ne+1),L.fill(),L.fillRect(Tt-5,ne+1,10,7)):ce==="ring"?(L.beginPath(),L.arc(Tt,ne,6,0,7),L.stroke()):L.fillRect(Tt-5,ne-5,10,10),L.font="bold 12px sans-serif",L.textAlign="center",L.strokeStyle="#EFEBDD",L.strokeText(Te,Tt,ne-11),L.fillStyle="#26302A",L.fillText(Te,Tt,ne-11))},bt=Math.max(_,S)/is;for(let ie of E.villages.around(c.p.x-bt,c.p.z-bt,c.p.x+bt,c.p.z+bt))k.explored(ie.x,ie.z)&&st(ie.x,ie.z,"\u6751\u838A","#8C5A3A","roof");for(let ie of k.portals.values())st(ie.x+.5,ie.z+.5,ie.name.replace("\u50B3\u9001\u9580\u30FB",""),"#5B3F8C","ring");st(Nt.x,Nt.z,"\u51FA\u751F\u9EDE","#3E6B3A"),c.bed&&st(c.bed.x+.5,c.bed.z+.5,"\u5E8A","#E0352B");let[Vt,Jt]=at(c.p.x,c.p.z);uf(L,Vt,Jt,c.yaw,9,"#E0352B"),l.append(I("div",{class:"panel map"},I("div",{class:"p-head"},I("h2",{},"\u5730\u5716"),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Pe},"\xD7")),A,I("div",{class:"row"},I("button",{class:"btn small",onclick:()=>{is=Math.min(6,is+1),gh()}},"\u653E\u5927"),I("button",{class:"btn small",onclick:()=>{is=Math.max(1,is-1),gh()}},"\u7E2E\u5C0F"),I("label",{class:"set inline"},I("input",{type:"checkbox",checked:ma?!0:null,onchange:ie=>dx(ie.target.checked)}),"\u89D2\u843D\u5C0F\u5730\u5716")),I("p",{class:"muted"},"\u53EA\u756B\u5F97\u51FA\u4F60\u53BB\u904E\u7684\u5730\u65B9\u3002\u7D05\u8272\u7BAD\u982D\u662F\u4F60\uFF1B\u5713\u5708\u662F\u50B3\u9001\u9580\u3002")))}function mx(){let l=gt.ov;l.innerHTML="",l.hidden=!1;let _=R.filter(A=>b.done[A.id]).length,S=I("div",{class:"ach-list"});R.forEach(A=>{let L=!!b.done[A.id];S.append(I("div",{class:"ach-item"+(L?" done":"")},I("i",{class:"badge"}),I("div",{},I("b",{},A.name_zh),I("small",{},A.desc_zh+(L?"\u3000\u2713":`\uFF08${_0(b,A)}/${A.need}\uFF09`)+(A.coins?`\u3000\u734E\u52F5 ${A.coins} \u91D1\u5E63`:"")))))}),l.append(I("div",{class:"panel"},I("div",{class:"p-head"},I("h2",{},`\u6210\u5C31\u3000${_} / ${R.length}`),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Pe},"\xD7")),I("p",{class:"muted"},t.coins?"\u6709\u4E9B\u6210\u5C31\u6703\u9001\u91D1\u5E63\u3002":"\u5275\u9020\u6A21\u5F0F\u7684\u6210\u5C31\u4E0D\u9001\u91D1\u5E63\u3002"),S))}async function gx(l){c.travelling||(c.travelling=!0,$r(!0),dh(),kn(),vt(l==="shadow"?"\u7A7F\u904E\u6697\u5F71\u50B3\u9001\u9580\u2026":"\u56DE\u5230\u539F\u672C\u7684\u4E16\u754C\u2026"),await ln(!0),ni("hw_dim",l),c.resetting=!0,location.reload())}function xh(){let l=c.boss;l&&(gt.bossName.textContent=`\u932F\u984C\u9B54\u9F8D\u30FB\u7B2C ${l.st.phase+1}\uFF0F3 \u968E\u6BB5\uFF1A${jo[l.st.phase].name_zh}`,gt.bossHp.style.width=Math.max(0,l.st.hp/Ko*100)+"%")}function xx(l){if(e!=="shadow"||b.stats.dragon)return;let _=yi,S=Math.hypot(c.p.x-_.x,c.p.z-_.z);if(!c.boss&&S<60&&ct.ready(_.x,_.z)){let z=O0();Y.add(z),c.boss={g:z,st:U0(),p:{x:_.x+.5,y:xi+1.5,z:_.z+.5},m:{kind:"boss",id:-1},t:0}}let A=c.boss;if(!A)return;A.t+=l,A.g.position.set(A.p.x,A.p.y+Math.sin(A.t*1.6)*.25,A.p.z),A.g.rotation.y=Math.atan2(-(c.p.x-A.p.x),-(c.p.z-A.p.z)),z0(A.g,A.t,l);let L=S<28;L===gt.bossbar.hidden&&(gt.bossbar.hidden=!L,L&&(xh(),A.greeted||(A.greeted=!0,vt("\u932F\u984C\u9B54\u9F8D\u51FA\u73FE\u4E86\uFF01\u9EDE\u7260\u5C31\u6703\u51FA\u984C\uFF0C\u7B54\u5C0D\u624D\u6253\u5F97\u5230"))))}function yx(){let l=c.boss;if(!l||l.busy)return;l.busy=!0,kn(),document.pointerLockElement&&document.exitPointerLock(),c.overlay="ask";let _=jo[l.st.phase],S=Ts().slice(0,40).sort(()=>Math.random()-.5);ta(gt.ov,{ids:l.st.retry.concat(S),types:_.types,modules:_.modules,title:`\u932F\u984C\u9B54\u9F8D\u30FB${_.name_zh}`,okText:"\u7B54\u5C0D\u4E86\uFF01\u9B54\u9F8D\u88AB\u6253\u4E2D\u4E86",onDone:(A,L,z)=>{c.overlay=null,l.busy=!1,A!=null&&Zd(A,L,z&&z.id)}})}function Zd(l,_,S){let A=c.boss;if(!A)return;let L=F0(A.st,l,_,S);if(!l){let z=c.p.x-A.p.x,K=c.p.z-A.p.z,at=Math.hypot(z,K)||1;c.v.x=z/at*8,c.v.z=K/at*8,c.v.y=5,vt("\u9B54\u9F8D\u62CD\u62CD\u7FC5\u8180\u628A\u4F60\u5439\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01"),xh();return}if(A.g.userData.hitT=.3,Ke("hit","stone"),L.done){_x();return}L.phaseUp!=null?(B0(A.g,L.phaseUp),vt(`\u9B54\u9F8D\u63DB\u4E86\u984F\u8272\uFF01\u7B2C ${L.phaseUp+1} \u968E\u6BB5\uFF1A${jo[L.phaseUp].name_zh}`)):vt(_?"\u6253\u5B57\u984C\uFF01\u9B54\u9F8D\u88AB\u5927\u5927\u6253\u4E2D\u4E86\uFF01":"\u7B54\u5C0D\u4E86\uFF01\u9B54\u9F8D\u88AB\u6253\u4E2D\u4E86\uFF01"),xh()}function _x(){Y.remove(c.boss.g),c.boss=null,gt.bossbar.hidden=!0,t.coins&&(Fn(D,Af),Ln()),xe("dragon"),ln(),vx()}function vx(){kn(),document.pointerLockElement&&document.exitPointerLock(),c.overlay="ending";let l=gt.ov;l.innerHTML="",l.hidden=!1;let _=["\u932F\u984C\u9B54\u9F8D\u300C\u5657\u300D\u7684\u4E00\u8072\uFF0C\u8B8A\u56DE\u4E00\u672C\u5C0F\u5C0F\u7684\u932F\u984C\u672C\u3002","\u88E1\u9762\u7684\u6BCF\u4E00\u984C\uFF0C\u4F60\u90FD\u5B78\u6703\u4E86\u3002","","\u4E3B\u89D2\u3000\u4F60","\u5192\u96AA\u3000\u65B9\u584A\u4E16\u754C\u30FB\u52C7\u8005\u5CF6\u4E94\u500B\u50B3\u9001\u9580\u30FB\u6697\u5F71\u754C","\u7DF4\u7FD2\u3000\u55AE\u5B57\u30FB\u6587\u6CD5\u30FB\u53E5\u578B\u30FB\u7247\u8A9E","\u5925\u4F34\u3000\u6751\u6C11\u30FB\u5C0F\u99AC\u30FB\u7926\u8ECA\u30FB\u4E00\u652F\u91E3\u7AFF","",t.coins?`\u734E\u52F5\u3000${Af} \u91D1\u5E63`:"","","\u8B1D\u8B1D\u4F60\u4E00\u8DEF\u7DF4\u7FD2\u82F1\u6587\u3002","\u4E16\u754C\u9084\u5728\uFF0C\u7E7C\u7E8C\u84CB\u4F60\u7684\u57CE\u5821\u5427\uFF01"];l.append(I("div",{class:"ending"},I("div",{class:"paper sun"}),I("div",{class:"paper hill"}),I("div",{class:"paper hill b"}),I("div",{class:"credits"},I("h1",{},"\u65B9\u584A\u4E16\u754C\u50B3\u8AAA"),_.map(S=>I("p",{},S)),I("button",{class:"btn big",onclick:Pe},"\u7E7C\u7E8C\u5192\u96AA"))))}function Mx(l){c.riddleBusy||(c.riddleBusy=!0,kn(),document.pointerLockElement&&document.exitPointerLock(),c.overlay="ask",ta(gt.ov,{ids:Ts().slice(0,20),types:["en2zh","zh2en","zh2en-type","phrase-fill"],title:"\u82F1\u6587\u5716\u66F8\u9928\u7684\u9580\uFF1A\u7B54\u5C0D\u5C31\u6703\u6253\u958B",okText:"\u7B54\u5C0D\u4E86\uFF01\u9580\u6162\u6162\u6253\u958B\u4E86",onDone:_=>{if(c.overlay=null,c.riddleBusy=!1,!_){_===!1&&vt("\u9580\u9084\u9396\u8457\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01");return}for(let S=-2;S<=2;S++){let A=p.get(ct.get(l.x,l.y+S,l.z));A&&A.interact==="riddle"&&ct.set(l.x,l.y+S,l.z,0)}xe("library"),c.dirtyMeta=!0,Ke("door")}}))}function bx(){if(!b.stats.village&&e==="overworld"){for(let l of E.villages.around(c.p.x-30,c.p.z-30,c.p.x+30,c.p.z+30))if(Math.hypot(l.x-c.p.x,l.z-c.p.z)<22){xe("village");break}}for(let l of bf(N,d,O,Gs())){if(c.dirtyMeta=!0,l.kind==="tut"){Ke("pickup"),N.tut.done&&vt("\u65B0\u624B\u6559\u5B78\u5B8C\u6210\u4E86\uFF01\u63A5\u4E0B\u4F86\u770B\u300C\u624B\u518A\u300D\u7684\u4E3B\u7DDA");continue}let _=t.coins?l.q.coins|0:0;_&&(Fn(D,_),Ln()),vt((l.kind==="main"?"\u4E3B\u7DDA\u5B8C\u6210\uFF1A"+l.q.title:"\u4ECA\u65E5\u4EFB\u52D9\u5B8C\u6210\uFF1A"+l.q.text)+(_?`\u3000+${_} \u91D1\u5E63`:""))}yh()}function Sx(l){if(l==="lair")return e==="shadow"?{x:yi.x+.5,z:yi.z+.5}:null;if(e!=="overworld")return null;if(l==="stele"&&Nt.stele)return{x:Nt.stele.x+.5,z:Nt.stele.z+.5};if(l==="portal"&&Nt.portal)return{x:Nt.portal.x+.5,z:Nt.portal.z+.5};if(l==="village"){if(!c.vilHint||Date.now()-c.vilHint.t>3e3){let _=null,S=1/0;for(let A of E.villages.around(c.p.x-400,c.p.z-400,c.p.x+400,c.p.z+400)){let L=Math.hypot(A.x-c.p.x,A.z-c.p.z);L<S&&(S=L,_=A)}c.vilHint={t:Date.now(),v:_}}return c.vilHint.v?{x:c.vilHint.v.x,z:c.vilHint.v.z}:null}return null}let Jd="";function yh(l){let _=!N.tut.done&&d.tutorial[N.tut.step],S=Mf(N,d),A=_||S,L=_?N.tut.step+(c.touch?"t":"d"):"";if((l||L!==Jd)&&(Jd=L,gt.tut.hidden=!_,gt.tut.innerHTML="",_&&gt.tut.append(I("b",{},`\u65B0\u624B\u6559\u5B78 ${N.tut.step+1}/${d.tutorial.length}`),I("span",{},_.text),I("small",{},c.touch?_.touch:_.desk),I("button",{class:"link",onclick:()=>{Nc(N,d),c.dirtyMeta=!0,yh(!0)}},"\u8DF3\u904E\u6559\u5B78"))),gt.obj.hidden=!A||!c.started,!A)return;c.objTarget=Sx(A.hint),gt.objArrow.hidden=!c.objTarget;let z=c.objTarget?Math.round(Math.hypot(c.objTarget.x-c.p.x,c.objTarget.z-c.p.z)):0;gt.objText.textContent=(_?"":"\u4E3B\u7DDA\uFF1A")+(_?_.text:S.text)+(c.objTarget&&z>4?`\uFF08\u7D04 ${z} \u683C\uFF09`:"")}function wx(){let l=gt.ov;l.innerHTML="",l.hidden=!1;let _=I("div",{class:"quest-list"});d.main.forEach((A,L)=>_.append(I("div",{class:"quest-item"+(L<N.main?" done":L===N.main?" cur":"")},I("b",{},(L<N.main?"\u2713 ":"")+A.title),I("small",{},A.text+(A.coins&&t.coins?`\u3000\u734E\u52F5 ${A.coins} \u91D1\u5E63`:"")))));let S=I("div",{class:"quest-list"});(N.daily?N.daily.picks:[]).forEach(A=>{let L=d.daily.find(K=>K.id===A),z=N.daily.done.includes(A);S.append(I("div",{class:"quest-item"+(z?" done":" cur")},I("b",{},(z?"\u2713 ":"")+L.text),I("small",{},`${z?L.need:Sf(N,d,O,A)} / ${L.need}`+(L.coins&&t.coins?`\u3000\u734E\u52F5 ${L.coins} \u91D1\u5E63`:""))))}),l.append(I("div",{class:"panel"},I("div",{class:"p-head"},I("h2",{},"\u5192\u96AA\u624B\u518A"),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Pe},"\xD7")),I("h3",{},"\u4ECA\u65E5\u4EFB\u52D9\uFF08\u6BCF\u5929\u63DB 3 \u500B\uFF09"),S,I("h3",{},`\u4E3B\u7DDA\u3000${Math.min(N.main,d.main.length)} / ${d.main.length}`),_,I("p",{class:"muted"},N.tut.done?"\u65B0\u624B\u6559\u5B78\u53EF\u4EE5\u5728\u300C\u8A2D\u5B9A\u300D\u91CD\u65B0\u770B\u3002":`\u65B0\u624B\u6559\u5B78\u9032\u884C\u4E2D\uFF1A\u7B2C ${N.tut.step+1} \u6B65`))),setTimeout(()=>{let A=l.querySelector(".quest-item.cur");A&&A.scrollIntoView&&A.scrollIntoView({block:"nearest"})},0)}function Kd(){Dd||!Gt.requestPointerLock||Gt.requestPointerLock()}addEventListener("keydown",l=>{if(l.target&&l.target.tagName==="INPUT")return;let _=l.key.toLowerCase();if(_==="e"){c.overlay==="inv"?Pe():!c.overlay&&sn("inv"),l.preventDefault();return}if(c.overlay!=="dead"&&!(c.overlay==="ask"||c.overlay==="quest")){if(_==="escape"&&c.overlay){c.overlay==="quiz"?(gt.ov.hidden=!0,gt.ov.innerHTML="",c.overlay=null):Pe();return}if(!c.overlay){if(_==="shift"&&c.ride){$r();return}c.keys[_]=!0,l.code==="Space"&&(c.keys[" "]=!0,l.preventDefault()),_>="1"&&_<="9"&&(c.sel=+_-1,X()),_==="f"&&zd(),_==="v"&&Od(),_==="m"&&sn("map"),_==="k"&&sn("ach"),_==="j"&&sn("quests")}}}),addEventListener("keyup",l=>{c.keys[l.key.toLowerCase()]=!1,l.code==="Space"&&(c.keys[" "]=!1)}),addEventListener("blur",()=>{c.keys={},kn()}),Gt.addEventListener("mousedown",l=>{if(!(c.touch||c.overlay)){if(document.pointerLockElement!==Gt){Kd();return}if(l.button===0){let _=Qi("center");if(_){Ys(_);return}c.mining.active=!0,c.mining.src="center"}if(l.button===2){let _=Qi("center");if(_&&_.kind==="vehicle"){lh(_.veh);return}if(Zr("bow")){da();return}Zs(Bn("center")),c.placeRepeat=.3,c.rightHeld=!0}}}),addEventListener("mouseup",l=>{l.button===0&&kn(),l.button===2&&(c.rightHeld=!1,c.charge&&pa("center"))}),Gt.addEventListener("contextmenu",l=>l.preventDefault()),addEventListener("mousemove",l=>{document.pointerLockElement===Gt&&(c.yaw-=l.movementX*.0024,c.pitch=Math.max(-1.55,Math.min(1.55,c.pitch-l.movementY*.0024*(c.invert?-1:1))))}),addEventListener("wheel",l=>{c.overlay||c.touch||(c.sel=(c.sel+(l.deltaY>0?1:8))%9,X())},{passive:!0}),document.addEventListener("pointerlockchange",()=>{gt.root.classList.toggle("locked",document.pointerLockElement===Gt)});let jr=new Map;function Ax(l){c.touch!==l&&(c.touch=l,gt.root.classList.toggle("touch",l),document.body.classList.toggle("is-touch",l))}gt.root.classList.toggle("touch",c.touch),document.body.classList.toggle("is-touch",c.touch),Gt.addEventListener("pointerdown",l=>{if(l.pointerType!=="touch"||(Ax(!0),c.overlay))return;if(l.preventDefault(),(document.body.classList.contains("lefty")?l.clientX>innerWidth*.6:l.clientX<innerWidth*.4)&&l.clientY>innerHeight*.35&&!c.joy.active){c.joy={x:0,y:0,active:!0,id:l.pointerId,ox:l.clientX,oy:l.clientY},gt.joy.style.transform=`translate(${l.clientX-60}px, ${l.clientY-60}px)`,gt.joy.hidden=!1,gt.knob.style.transform="translate(0px,0px)",jr.set(l.pointerId,{kind:"joy"});return}let _={kind:"look",x:l.clientX,y:l.clientY,sx:l.clientX,sy:l.clientY,t0:performance.now(),drag:!1,hold:!1,bow:Zr("bow")};_.timer=setTimeout(()=>{if(_.drag)return;if(_.bow){_.charging=da(_.t0);return}let S=Qi("screen",_.x,_.y);if(S&&S.kind==="vehicle"){ch(S.veh),_.vehHit=!0;return}_.hold=!0,c.mining.active=!0,c.mining.src="screen",c.mining.sx=_.x,c.mining.sy=_.y},280),jr.set(l.pointerId,_),c.touchPress=_},{passive:!1}),addEventListener("pointermove",l=>{let _=jr.get(l.pointerId);if(!_)return;if(_.kind==="joy"){let L=l.clientX-c.joy.ox,z=l.clientY-c.joy.oy,K=Math.hypot(L,z),at=55;K>at&&(L*=at/K,z*=at/K),c.joy.x=L/at,c.joy.y=z/at,gt.knob.style.transform=`translate(${L}px,${z}px)`;return}let S=l.clientX-_.x,A=l.clientY-_.y;_.x=l.clientX,_.y=l.clientY,!_.drag&&!_.charging&&Math.hypot(_.x-_.sx,_.y-_.sy)>12&&(_.drag=!0,clearTimeout(_.timer),_.hold&&(kn(),_.hold=!1)),_.drag?(c.yaw-=S*.0055,c.pitch=Math.max(-1.55,Math.min(1.55,c.pitch-A*.0055*(c.invert?-1:1)))):_.hold&&(c.mining.sx=_.x,c.mining.sy=_.y)});let jd=l=>{let _=jr.get(l.pointerId);if(_){if(jr.delete(l.pointerId),c.touchPress===_&&(c.touchPress=null),_.kind==="joy"){c.joy={x:0,y:0,active:!1},gt.joy.hidden=!0;return}if(clearTimeout(_.timer),_.hold)kn();else if(_.charging)pa("screen",_.x,_.y);else if(!_.drag&&performance.now()-_.t0<280&&!c.overlay&&w.slots[c.sel]&&w.slots[c.sel].id==="bow")Zs(Bn("screen",_.x,_.y));else if(!_.drag&&performance.now()-_.t0<280&&!c.overlay){let S=Qi("screen",_.x,_.y);S&&S.kind==="vehicle"?lh(S.veh):S?Ys(S):Zs(Bn("screen",_.x,_.y))}}};addEventListener("pointerup",jd),addEventListener("pointercancel",jd);let Qd=(l,_,S)=>{l.addEventListener("pointerdown",A=>{A.preventDefault(),A.stopPropagation(),_()}),l.addEventListener("pointerup",S),l.addEventListener("pointercancel",S),l.addEventListener("pointerleave",S)};Qd(gt.bJump,()=>{c.jumpHeld=!0},()=>{c.jumpHeld=!1}),Qd(gt.bDown,()=>{c.downHeld=!0},()=>{c.downHeld=!1}),gt.bFly.addEventListener("pointerdown",l=>{l.preventDefault(),l.stopPropagation(),zd()}),gt.bPlace.addEventListener("pointerdown",l=>{if(l.preventDefault(),l.stopPropagation(),Zr("bow")){da();return}Zs(Bn("center"))}),["pointerup","pointercancel","pointerleave"].forEach(l=>gt.bPlace.addEventListener(l,()=>{c.charge&&pa("center")})),document.addEventListener("touchmove",l=>{l.target.closest(".scroll, .panel")||l.preventDefault()},{passive:!1}),["gesturestart","gesturechange","dblclick"].forEach(l=>document.addEventListener(l,_=>_.preventDefault(),{passive:!1})),gt.start.hidden=!1,gt.go.onclick=()=>{gt.start.hidden=!0,c.started=!0,c.paused=!1,gt.root.classList.add("started"),c.touch||Kd()};async function ln(l){if(c.resetting)return;c.ride&&c.ride.veh&&(c.ride.veh.p={x:c.p.x,y:c.p.y,z:c.p.z},c.ride.veh.yaw=c.ride.yaw);let _={hw_meta:{v:1,seed:P,time:c.time,build:jc},hw_player:{dims:Object.assign({},c.dimPos,{[e]:{x:c.p.x,y:c.p.y,z:c.p.z,yaw:c.yaw}}),x:c.p.x,y:c.p.y,z:c.p.z,yaw:c.yaw,pitch:c.pitch,fly:c.fly,sel:c.sel,hp:et.hp,bed:c.bed,armor:c.armor,armorDur:c.armorDur,horse:c.horseMob&&!c.horseMob.gone?{x:c.horseMob.p.x,y:c.horseMob.p.y,z:c.horseMob.p.z,saddled:!!c.horseMob.saddled}:c.horse,pets:Rd(Rt.list).concat(c.petsPending).slice(0,Xs)},hw_inventory:Jo(w),hw_coins:T0(D),[i("hw_furnaces")]:tt,[i("hw_chests")]:Object.fromEntries(Object.entries(it).map(([S,A])=>[S,Jo(A)])),[i("hw_crops")]:rt,hw_quests:Z,hw_portal_claimed:q.slice(-200),hw_ach:b,hw_story:N,[i("hw_vehicles")]:c.vehicles.map(S=>({kind:S.kind,x:S.p.x,y:S.p.y,z:S.p.z,yaw:S.yaw,wy:S.y,st:S.st?{x:S.st.x,y:S.st.y,z:S.st.z,shape:S.st.shape,from:S.st.from,s:S.st.s}:null}))};k.dirty&&(l||Date.now()-(c.mapSavedAt||0)>3e4)&&(_[i("hw_map")]=k.serialize(),c.mapSavedAt=Date.now());for(let S of c.dirty){let A=C.get(S);A&&(_[s+S]=Tf(A))}c.dirty.clear(),c.dirtyMeta=!1;try{await Oc(_),c.lastSave=Date.now()}catch(S){console.warn("save failed",S),!c.quotaWarned&&S&&(S.name==="QuotaExceededError"||/quota/i.test(S.message||""))&&(c.quotaWarned=!0,vt("\u5B58\u6A94\u7A7A\u9593\u4E0D\u5920\u4E86\uFF01\u8ACB\u5230\u300C\u8A2D\u5B9A\u300D\u532F\u51FA\u4E16\u754C\u5099\u4EFD\uFF0C\u6216\u8ACB\u5927\u4EBA\u6E05\u4E00\u4E0B\u700F\u89BD\u5668\u7A7A\u9593"))}}setInterval(()=>{c.started&&ln()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&c.started&&ln(!0)}),addEventListener("pagehide",()=>{c.started&&ln(!0)}),c.stats={mined:0,placed:0};function tp(){let l=innerWidth,_=innerHeight;qt.setSize(l,_,!1),mt.aspect=l/_,mt.updateProjectionMatrix()}addEventListener("resize",tp),tp(),Ln(),X(),T(),nn(),t.creative&&(ji("#coinpill").hidden=!0,ji("#modebadge").hidden=!1,gt.btnShop.hidden=!0,gt.hearts.hidden=!0),(Array.isArray(g.vehs)?g.vehs:[]).forEach(l=>{l&&(l.kind==="boat"||l.kind==="minecart"&&l.st)&&ah(l.kind,l,l.yaw||0,l.kind==="boat"?{y:l.wy}:{st:Object.assign({v:0,lastIn:0},l.st)})}),$s(),setInterval($s,6e4),Mi(),e==="shadow"&&(xe("shadow"),setTimeout(()=>vt("\u9019\u88E1\u662F\u6697\u5F71\u754C\uFF01\u932F\u984C\u9B54\u9F8D\u5728\u524D\u9762\u7684\u5E73\u53F0\u4E0A\uFF1B\u56DE\u5BB6\u8D70\u9032\u5F8C\u9762\u7684\u50B3\u9001\u9580"),600)),addEventListener("pageshow",l=>{l.persisted&&Mi()});let ep=performance.now(),ga=0,_h=0,Ex=new ue("#EFEBDD"),Tx=new ue("#22302F"),Cx=new ue("#E6B48C");function np(l){requestAnimationFrame(np);let _=(l-ep)/1e3;ep=l;let S=Math.min(.05,_);c.frames.push(_*1e3),c.frames.length>4e3&&c.frames.shift(),ct.update(c.p.x,c.p.z);let A=ct.ready(c.p.x,c.p.z);if(c.auto&&Lx(S),c.started&&!c.overlay&&A&&Ix(S),c.started&&A&&!c.travelling){let ce=p.get(ct.get(c.p.x,c.p.y+.2,c.p.z));ce&&ce.interact==="shadow_portal"?!c.portalLock&&t.portals&&(c.portalT=(c.portalT||0)+S,c.portalT>1&&gx(e==="shadow"?"overworld":"shadow")):(c.portalLock=!1,c.portalT=0)}c.started&&!c.dead&&gd(et,S)&&(T(),c.dirtyMeta=!0),c.time=(c.time+S/jS)%1;let L=c.time*Math.PI*2,z=Math.sin(L),K=e==="shadow"?.42:Math.min(1,Math.max(0,(z+.12)/.42));ut.copy(Tx).lerp(Ex,K);let at=Math.max(0,1-Math.abs(z)/.3)*(K>.05?1:.4);if(ut.lerp(Cx,at*.55),e==="shadow"&&ut.set("#1C2620"),!(t.creative&&An("hw_weather","on")==="off")?sd(c.weather,S):c.weather.level=0,c.ambT=(c.ambT||0)+S,c.ambT>1){c.ambT=0;let ce=Math.floor(c.p.x),Tt=Math.floor(c.p.z),ne=!1;for(let Le=2;Le<14&&!ne;Le++)p.flat.opaque[ct.get(ce,Math.floor(c.p.y)+Le,Tt)]&&(ne=!0);c.underground=ne&&c.p.y<E.height(ce,Tt)-4,c.biome=E.biomeOf(ce,Tt);let Re=ed({day:K,underground:c.underground});Re!==c.musicScene&&(c.musicScene=Re,jf(nd[Re]))}let bt=c.underground||e==="shadow"?null:rd(c.biome,c.weather),Vt=bt?c.weather.level:0;Vt&&ut.lerp(c.rainSky||(c.rainSky=new ue("#8E9590")),.45*Vt),pt(S,mt.position,bt),Qf(bt==="rain"?Vt:0),As(c.overlay==="quiz"||c.overlay==="ask"||c.overlay==="quest"),le.uniforms.uDay.value=K*(1-.3*Vt),le.uniforms.uFog.value.set(...Rx(ut));let Jt=Xr();c.eyeOff*=Math.pow(5e-4,S);let ie=fa();if(c.view==="tp"){let ce=Nr(Jt,{x:-ie.x,y:-ie.y,z:-ie.z},4,ii,ne=>p.flat.opaque[ne]===1),Tt=ce?Math.max(.4,ce.dist-.25):4;mt.position.set(Jt.x-ie.x*Tt,Jt.y-ie.y*Tt,Jt.z-ie.z*Tt)}else mt.position.set(Jt.x,Jt.y,Jt.z);mt.rotation.set(c.pitch,c.yaw,0);let we=mt.far*.8;if(H.position.set(mt.position.x+Math.cos(L)*we,mt.position.y+Math.sin(L)*we,mt.position.z+.25*we),H.scale.setScalar(we*.14),He.position.set(mt.position.x-Math.cos(L)*we,mt.position.y-Math.sin(L)*we,mt.position.z-.25*we),He.scale.setScalar(we*.1),H.visible=He.visible=e!=="shadow",It.visible=c.view==="tp",It.visible){It.position.set(c.p.x,c.p.y+(c.ride?Xg[c.ride.kind]:0),c.p.z),It.rotation.y=c.yaw;let ce=Math.hypot(c.v.x,c.v.z),Tt=Math.sin(l/120)*Math.min(1,ce/4)*.7;Ot.rotation.x=Tt,Ut.rotation.x=-Tt,te.rotation.x=-Tt,se.rotation.x=Tt;let ne=.35+.65*K;It.children.forEach(Re=>Re.material.color.copy(Re.userData.base).multiplyScalar(ne))}for(let ce in fe)fe[ce].color.setScalar(.4+.6*K);Gd.color.setScalar(.5+.5*K);for(let ce in qr)qr[ce].color.copy(qr[ce].userData.base).multiplyScalar(.35+.65*K);c.ride&&c.ride.obj&&(c.ride.obj.position.set(c.p.x,c.p.y,c.p.z),c.ride.obj.rotation.y=c.ride.yaw,c.ride.obj.rotation.x=c.ride.pitch||0);let Te=c.started&&!c.overlay?c.mining.active&&c.mining.src==="screen"?Bn("screen",c.mining.sx,c.mining.sy):Bn("center"):null;if(Te){ge.visible=!0;let ce=oh(Te.n);if(ce){let Tt=1,ne=1,Re=1,Le=0,fn=0,mn=0;for(let Bi of ce)Tt=Math.min(Tt,Bi[0]),ne=Math.min(ne,Bi[1]),Re=Math.min(Re,Bi[2]),Le=Math.max(Le,Bi[3]),fn=Math.max(fn,Bi[4]),mn=Math.max(mn,Bi[5]);ge.scale.set(Le-Tt,fn-ne,mn-Re),ge.position.set(Te.x+(Tt+Le)/2,Te.y+(ne+fn)/2,Te.z+(Re+mn)/2)}else ge.scale.set(1,1,1),ge.position.set(Te.x+.5,Te.y+.5,Te.z+.5)}else ge.visible=!1;let rn=c.touchPress;if(ix(!c.started||c.overlay||c.mining.active?null:c.touch?rn&&!rn.drag&&!rn.hold?Bn("screen",rn.x,rn.y):null:Te),c.mining.active&&Te){let ce=Te.x+","+Te.y+","+Te.z;ce!==c.mining.k&&(c.mining.k=ce,c.mining.t=0),c.mining.t+=S;let Tt=t.creative?p.get(Te.n).hardness<0?1/0:t.breakTime:Wc(p.get(Te.n),Hd()).time;if(Tt===1/0)oe.visible=!1,c.mining.warned||(vt(p.name(Te.n)+"\u6316\u4E0D\u52D5"),c.mining.warned=!0);else{c.mining.tick=(c.mining.tick||0)+S,c.mining.tick>.25&&(c.mining.tick=0,Ke("hit",Br(p.get(Te.n))));let ne=c.mining.t/Tt;oe.visible=!0,oe.position.copy(ge.position),oe.scale.copy(ge.scale),oe.material.map=_e[Math.min(3,Math.floor(ne*4))],ne>=1&&(tx(Te),c.mining.k="",c.mining.t=0,oe.visible=!1)}}else oe.visible=!1,c.mining.active||(c.mining.warned=!1);if(c.rightHeld&&!c.overlay&&(c.placeRepeat-=S,c.placeRepeat<=0&&(Zs(Bn("center")),c.placeRepeat=.25)),c.charge)if(c.overlay||!Zr("bow"))$d();else{let ce=Yc((performance.now()-c.charge.t0)/1e3);gt.chargeBar.style.width=Math.round(ce*100)+"%",gt.charge.classList.toggle("full",ce>=qc)}if(Px(S),hx(c.overlay?0:S),c.fish){let ce=af(c.fish,S),Tt=w.slots[c.sel];!Tt||Tt.id!=="fishing_rod"||Math.hypot(c.p.x-c.fish.at.x,c.p.z-c.fish.at.z)>16?dh():(ce==="bite"?(vt("\u9B5A\u4E0A\u9264\u4E86\uFF01\u5FEB\u9EDE\u4E00\u4E0B\uFF01"),Ke("pickup")):ce==="escape"&&vt("\u9B5A\u6E9C\u8D70\u4E86\uFF0C\u518D\u7B49\u7B49\u770B"),fh.position.set(c.fish.at.x,c.fish.at.y-.05+(c.fish.phase==="bite"?-.18:Math.sin(l/400)*.03),c.fish.at.z))}if(c.netT=(c.netT||0)+S,c.netT>.25&&(c.netT=0,J.sendState({x:c.p.x,y:c.p.y,z:c.p.z,yaw:c.yaw,dim:e,ride:c.ride?c.ride.kind:null})),c.started){c.lookAcc=(c.lookAcc||0)+Math.min(1,Math.abs(c.yaw-(c.lastYaw??c.yaw))+Math.abs(c.pitch-(c.lastPitch??c.pitch))),c.lastYaw=c.yaw,c.lastPitch=c.pitch;let ce=Math.hypot(c.p.x-(c.lastPx??c.p.x),c.p.z-(c.lastPz??c.p.z));ce<2&&(c.walkAcc=(c.walkAcc||0)+ce),c.lastPx=c.p.x,c.lastPz=c.p.z,c.storyT=(c.storyT||0)+S,c.storyT>.5&&(c.storyT=0,bx())}if(c.objTarget&&!gt.objArrow.hidden){let ce=c.objTarget,Tt=Math.atan2(-(ce.x-c.p.x),-(ce.z-c.p.z))-c.yaw;gt.objArrow.style.transform="rotate("+-Tt+"rad)"}if(c.started&&!document.hidden&&!c.dead&&(c.playT=(c.playT||0)+S,c.playT>1800&&(c.playT=0,gt.rest.hidden=!1,Ke("pickup"))),c.mapT=(c.mapT||0)+S,c.mapT>.3&&(c.mapT=0,k.scan(ct,c.mapDirty),ma&&px()),c.cropT=(c.cropT||0)+S,c.cropT>2){c.cropT=0;let ce=Date.now();for(let Tt in rt){let[ne,Re,Le]=Tt.split(",").map(Number);if(!ct.ready(ne,Le))continue;let fn=p.get(ct.get(ne,Re,Le));if(!fn||!fn.crop){delete rt[Tt];continue}let mn=Vf(rt[Tt].t,ce,rt[Tt].wet);mn>(fn.stage|0)&&(ct.set(ne,Re,Le,p.num("wheat_"+mn)),c.dirtyMeta=!0)}}nh(c.overlay?0:S,K,l),xx(c.overlay?0:S);for(let ce in tt){let Tt=tt[ce];Tt.jobs.length&&(cd(Tt,S),c.dirtyMeta=!0,c.overlay==="furnace"&&ce===zn&&(c.furnUi=(c.furnUi||0)+S)>.5&&(c.furnUi=0,ri()))}qt.render(Y,mt),ga+=_,_h++,ga>.5&&(gt.dbg&&(gt.dbg.textContent=`${Math.round(_h/ga)} fps \xB7 \u5340\u584A ${ct.stats.loaded} \xB7 ${r0[E.biomeOf(Math.floor(c.p.x),Math.floor(c.p.z))]} \xB7 ${c.p.x.toFixed(1)}, ${c.p.y.toFixed(1)}, ${c.p.z.toFixed(1)}`),ga=0,_h=0),!A&&c.started?gt.loading.hidden=!1:gt.loading.hidden=!0}function Rx(l){let _=l.getHexString();return[parseInt(_.slice(0,2),16)/255,parseInt(_.slice(2,4),16)/255,parseInt(_.slice(4,6),16)/255]}function Ix(l){let _=c.keys,S=(_.d?1:0)-(_.a?1:0),A=(_.w?1:0)-(_.s?1:0);c.joy.active&&(S=c.joy.x,A=-c.joy.y);let L=Math.min(1,Math.hypot(S,A));if(L>0){let mn=Math.hypot(S,A);S=S/mn*L,A=A/mn*L}let z=-Math.sin(c.yaw),K=-Math.cos(c.yaw),at=Math.cos(c.yaw),st=-Math.sin(c.yaw);if(c.ride&&c.ride.kind!=="horse"){ox(l,S,A,z,K,at,st);return}let bt=_.control||!c.fly&&_.shift||c.joy.active&&L>.92,Vt=ii(c.p.x,c.p.y+.1,c.p.z),Jt=ii(c.p.x,c.p.y+1,c.p.z),ie=p.flat.liquid[Vt]===1||p.flat.liquid[Jt]===1,we=!c.fly&&(p.flat.climb[Vt]===2||p.flat.climb[Jt]===2);we!==!!c.climbing&&(c.climbing=we,gt.root.classList.toggle("climbing",we));let Te=c.fly?10:c.ride?8.5:ie?2.6:bt?6.2:4.3,rn=(z*A+at*S)*Te,ce=(K*A+st*S)*Te,Tt=_[" "]||c.jumpHeld,ne=c.fly&&_.shift||c.downHeld;if(c.fly)c.v.x=rn,c.v.z=ce,c.v.y=((Tt?1:0)-(ne?1:0))*8;else{let mn=c.onGround?14:5,Bi=1-Math.exp(-mn*l);if(c.v.x+=(rn-c.v.x)*Bi,c.v.z+=(ce-c.v.z)*Bi,ie)c.v.y-=9*l,c.v.y<-3&&(c.v.y=-3),Tt&&(c.v.y=3.4);else if(p.flat.climb[Vt]||p.flat.climb[Jt]){let vh=we,Dx=ne||vh&&_.shift;c.v.y=Tt||!vh&&A>.1?3.2:Dx?-3:vh?0:Math.max(c.v.y-28*l,-1.5),c.fallTop=c.p.y}else c.v.y-=28*l,c.v.y<-40&&(c.v.y=-40),Tt&&c.onGround&&(c.v.y=c.ride?10.5:8.6,c.onGround=!1)}let Re=c.onGround,Le=Ac(c.p,c.v,l,dt,{canStep:!c.fly,grounded:c.onGround});if(c.onGround=Le.onGround,Le.stepped&&(c.eyeOff-=Le.stepped),c.fallTop==null||c.fly||ie||c.onGround&&Re?c.fallTop=c.p.y:c.onGround||(c.fallTop=Math.max(c.fallTop,c.p.y)),c.onGround&&!Re){let mn=pd(c.fallTop-c.p.y,{water:ie,flying:c.fly});mn&&(V(mn),vt("\u54CE\u5440\uFF0C\u6454\u4E86\u4E00\u4E0B")),c.fallTop=c.p.y}let fn=Math.hypot(c.v.x,c.v.z);c.onGround&&!c.fly&&fn>1&&(c.stepT=(c.stepT||0)+l*fn,c.stepT>1.8&&(c.stepT=0,Ke("step",Br(p.get(ii(c.p.x,c.p.y-.5,c.p.z)))))),c.p.y<-20&&(c.p={x:Nt.x,y:Nt.y+1,z:Nt.z},c.v={x:0,y:0,z:0},c.fallTop=c.p.y)}function Px(l){let _=c.p.x,S=c.p.y+.9,A=c.p.z;for(let L=c.drops.length-1;L>=0;L--){let z=c.drops[L];z.age+=l;let K=_-z.p.x,at=S-z.p.y,st=A-z.p.z,bt=Math.hypot(K,at,st);if(bt<1.5&&z.age>.25&&wn(w,z.id,1,y)===0){Y.remove(z.s),c.drops.splice(L,1),c.dirtyMeta=!0,X(),Ke("pickup");continue}if(bt<4.5&&z.age>.25?(z.v.x=K/bt*6,z.v.y=at/bt*6,z.v.z=st/bt*6,z.p.x+=z.v.x*l,z.p.y+=z.v.y*l,z.p.z+=z.v.z*l):(z.v.y-=18*l,z.v.x*=.9,z.v.z*=.9,Ac(z.p,z.v,l,dt,{w:.25,h:.25})),z.age>300){Y.remove(z.s),c.drops.splice(L,1);continue}z.s.position.set(z.p.x,z.p.y+.2+Math.sin(z.age*3)*.06,z.p.z)}}c.auto=th.get("auto")==="walk";let ip=0;function Lx(l){c.started||gt.go.click(),ip+=l,c.keys.w=!0,c.keys[" "]=ip%1.6<.15,c.yaw+=l*.08}window.HW={build:jc,TEST:Dd,G:c,reg:p,inv:w,wallet:D,world:ct,Inv:Dc,Aud:td,Amb:od,chests:it,crops:rt,Farm:Jf,clickSlot:Ie,MODE:n,RULE:t,switchMode:rh,questState:Z,tradesJson:m,spawnVillagers:On,terr:E,claimPortalRewards:Mi,portals:B,claimedIds:q,mobS:Rt,mobDefs:Et,spawnMob:Se,hitMob:Ys,mobAt:Qi,surfaceY:$t,health:et,hurt:V,Health:_d,furnaces:tt,Smelt:fd,smeltList:St,recipes:M,craftCtx:zt,breakInfo:Wc,start(){gt.go.click()},state(){return{pos:{...c.p},coins:D.coins,inv:Jo(w),loaded:ct.stats.loaded,stats:{...c.stats},overlay:c.overlay,fly:c.fly}},lookAt(l,_,S){let A=Xr(),L=l-A.x,z=_-A.y,K=S-A.z;c.yaw=Math.atan2(-L,-K),c.pitch=Math.atan2(z,Math.hypot(L,K))},target(){let l=Bn("center");return l&&{x:l.x,y:l.y,z:l.z,n:l.n,face:l.face}},mine(l){l?(c.mining.active=!0,c.mining.src="center"):kn()},use(){return Zs(Bn("center"))},key(l,_){c.keys[l]=_},books:ns,booksJson:x,shootArrow:ph,Arch:wd,Pets:Pd,petClick:qd,startCharge:da,releaseCharge:pa,achDefs:R,open:sn,close:Pe,save:ln,spawn:Nt,dismount:$r,Rail:rf,ach:b,mapv:k,Fish:hf,bump:xe,bank:j,net:J,backupData:Ud,applyPrefs:W,story:N,Story:wf,QJ:d,DIM:e,bossDamage:Zd,Shadow:pf,hitVehicle:ch,rideVehicle:lh,ghostState:()=>({visible:Ks.visible,sy:hh[0].scale.y,two:hh[1].visible}),perf(){return{frames:c.frames.slice(),meshMs:ct.stats.meshMs.slice(),genMs:ct.stats.genMs.slice(),loaded:ct.stats.loaded}},resetPerf(){c.frames.length=0,ct.stats.meshMs.length=0,ct.stats.genMs.length=0},info:()=>({calls:qt.info.render.calls,tris:qt.info.render.triangles,geos:qt.info.memory.geometries,objs:Y.children.length}),ready:()=>ct.ready(c.p.x,c.p.z)},requestAnimationFrame(np)}function s1(){let n=ji("#ui"),t=e=>n.querySelector(e);return th.get("debug")!==null&&(t("#dbg").hidden=!1),{root:n,coins:t("#coins"),armor:t("#armorhud"),hearts:t("#hearts"),flash:ji("#hurt"),hotbar:t("#hotbar"),selName:t("#selname"),ov:ji("#ov"),toasts:t("#toasts"),btnInv:t("#b-inv"),btnSnd:t("#b-snd"),btnShop:t("#b-shop"),btnSet:t("#b-set"),btnView:t("#b-view"),bRide:t("#b-ride"),bMap:t("#b-map"),bAch:t("#b-ach"),mini:t("#minimap"),bossbar:t("#bossbar"),bossName:t("#bossname"),bossHp:t("#bosshp"),obj:t("#objective"),rest:t("#restcard"),restOk:t("#restok"),learnPill:t("#learnpill"),learnCnt:t("#learncnt"),learnBar:t("#learnbar"),objArrow:t("#objarrow"),objText:t("#objtext"),tut:t("#tutorial"),bQuest:t("#b-quest"),charge:t("#charge"),chargeBar:t("#chargebar"),joy:t("#joy"),knob:t("#knob"),bJump:t("#b-jump"),bFly:t("#b-fly"),bPlace:t("#b-place"),bDown:t("#b-down"),start:ji("#start"),go:ji("#go"),dbg:t("#dbg").hidden?null:t("#dbg"),loading:t("#loading")}}i1().catch(n=>{console.error(n);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message)});})();
